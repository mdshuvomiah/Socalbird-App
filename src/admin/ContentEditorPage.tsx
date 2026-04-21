import { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, Save, Eye, EyeOff, RotateCcw, Download, Upload,
  CheckCircle, AlertCircle, Sparkles, Edit, Type, Image as ImageIcon,
  List, Plus, Trash2, GripVertical, Loader2
} from 'lucide-react';
import { useContent } from './ContentContext';
import { supabase } from '../lib/supabase';

interface ContentEditorPageProps {
  pageId: string;
  pageName: string;
  onBack: () => void;
}

export function ContentEditorPage({ pageId, pageName, onBack }: ContentEditorPageProps) {
  const { content, getPageContent, updateContent, saveToDatabase, isLoading } = useContent();
  const [pageData, setPageData] = useState<any>({});
  const [activeSection, setActiveSection] = useState<string>('');
  const [showPreview, setShowPreview] = useState(false);
  const [saved, setSaved] = useState(false);
  const [editingField, setEditingField] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSavePopup, setShowSavePopup] = useState(false);

  // Keep track of initialized page to avoid overwriting edits when content updates
  const initializedPageId = useRef<string | null>(null);

  useEffect(() => {
    if (isLoading) return;

    if (initializedPageId.current !== pageId) {
      // Deep clone to prevent mutating global context directly
      const data = JSON.parse(JSON.stringify(getPageContent(pageId)));
      setPageData(data);
      if (Object.keys(data).length > 0) {
        setActiveSection(Object.keys(data)[0]);
      }
      initializedPageId.current = pageId;
    }
  }, [pageId, isLoading, getPageContent]);

  const handleFieldChange = (sectionId: string, fieldPath: string, value: any) => {
    const updatedData = { ...pageData };
    // Deep clone the section so we don't mutate context state directly
    updatedData[sectionId] = JSON.parse(JSON.stringify(updatedData[sectionId] || {}));

    const keys = fieldPath.split('.');
    let current = updatedData[sectionId];

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {}; // protect against undefined
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;

    setPageData(updatedData);
    updateContent(pageId, sectionId, updatedData[sectionId]);
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Create the latest content object by merging current pageData into the existing content context
    // This bypasses the stale closure issue of React state during the same render turn.
    const fullUpdatedContent = {
      ...content,
      [pageId]: {
        ...(content[pageId] || {}),
        ...pageData
      }
    };

    // Update context state for UI consistency
    Object.keys(pageData).forEach(sectionId => {
      updateContent(pageId, sectionId, pageData[sectionId]);
    });
    
    // Explicitly call saveToDatabase with the computed latest state
    const success = await saveToDatabase(fullUpdatedContent);
    setIsSaving(false);
    
    if (success) {
      setSaved(true);
      setShowSavePopup(true);
      setTimeout(() => {
        setSaved(false);
        setShowSavePopup(false);
      }, 3000);
    } else {
      alert('Failed to save content. Please try again.');
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset this page to defaults? This cannot be undone.')) {
      const data = getPageContent(pageId);
      setPageData(data);
    }
  };

  const uploadFile = async (file: File, sectionId: string, fieldPath: string) => {
    try {
      setIsUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `logos/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('public-assets')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('public-assets')
        .getPublicUrl(filePath);

      if (data?.publicUrl) {
        handleFieldChange(sectionId, fieldPath, data.publicUrl);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload image. Please make sure the public-assets bucket exists in Supabase.');
    } finally {
      setIsUploading(false);
    }
  };

  const renderField = (sectionId: string, fieldKey: string, fieldValue: any, fieldPath: string) => {
    const fullPath = `${sectionId}.${fieldPath}`;
    const isEditing = editingField === fullPath;

    // Special handling for brand logo section
    if (pageId === 'brand' && sectionId === 'logo') {
      if (fieldKey === 'type') {
        return (
          <div key={fullPath} className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Type className="w-4 h-4 text-cyan-400" />
              Logo Type
            </label>
            <select
              value={fieldValue}
              onChange={(e) => handleFieldChange(sectionId, fieldPath, e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
            >
              <option value="text">Text Logo</option>
              <option value="image">Image Logo</option>
              <option value="both">Both (Image + Text)</option>
            </select>
          </div>
        );
      }

      if (fieldKey === 'gradient') {
        return (
          <div key={fullPath} className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Text Gradient (Tailwind Classes)
            </label>
            <input
              type="text"
              value={fieldValue}
              onChange={(e) => handleFieldChange(sectionId, fieldPath, e.target.value)}
              placeholder="e.g., from-blue-500 to-cyan-400"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
            />
            <div className="text-xs text-gray-500">
              Preview: <span className={`bg-gradient-to-r ${fieldValue} bg-clip-text text-transparent font-bold`}>{pageData?.logo?.text || 'SocalBird'}</span>
            </div>
          </div>
        );
      }

    }

    // Generic handling for image fields based on fieldKey name
    if (typeof fieldValue === 'string' && 
        (fieldKey.toLowerCase().includes('image') || 
         fieldKey.toLowerCase().includes('iconurl') ||
         fieldKey.toLowerCase() === 'cover' ||
         fieldKey.toLowerCase() === 'avatar' ||
         fieldKey.toLowerCase() === 'photo' ||
         (pageId === 'brand' && sectionId === 'logo' && fieldKey === 'imageUrl'))) {
      
      return (
        <div key={fullPath} className="space-y-2">
          <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-cyan-400" />
            {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)} (Image)
          </label>

          <div className="flex flex-col gap-4">
            {fieldValue && (
              <div className="relative w-32 h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 overflow-hidden">
                <img src={fieldValue} alt="Preview" className="max-w-full max-h-full object-contain" />
                <button
                  onClick={() => handleFieldChange(sectionId, fieldPath, '')}
                  className="absolute top-1 right-1 p-1 bg-red-500/80 hover:bg-red-500 text-white rounded-md transition-colors"
                  title="Remove Image"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}

            <label className={`
              flex items-center justify-center w-full px-6 py-8 
              bg-white/5 border-2 border-dashed border-white/20 rounded-xl 
              hover:border-cyan-500/50 hover:bg-white/10 transition-all cursor-pointer
              ${isUploading ? 'opacity-50 pointer-events-none' : ''}
            `}>
              <div className="flex flex-col items-center gap-2 text-gray-400">
                {isUploading ? (
                  <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
                ) : (
                  <Upload className="w-8 h-8 group-hover:text-cyan-400 transition-colors" />
                )}
                <span className="text-sm font-medium">
                  {isUploading ? 'Uploading...' : 'Click or drop image to upload'}
                </span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    uploadFile(e.target.files[0], sectionId, fieldPath);
                  }
                }}
                className="hidden"
              />
            </label>
            {fieldValue && (
               <input
                type="text"
                value={fieldValue}
                onChange={(e) => handleFieldChange(sectionId, fieldPath, e.target.value)}
                placeholder="Or paste image URL here..."
                className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-sm"
              />
            )}
            {!fieldValue && (
              <input
                type="text"
                value={fieldValue}
                onChange={(e) => handleFieldChange(sectionId, fieldPath, e.target.value)}
                placeholder="Or paste image URL here..."
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-sm"
              />
            )}
          </div>
        </div>
      );
    }

    if (typeof fieldValue === 'string') {
      return (
        <div key={fullPath} className="space-y-2">
          <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
            <Type className="w-4 h-4 text-cyan-400" />
            {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)}
          </label>
          <div className="relative">
            {fieldValue.length > 100 || fieldKey.includes('description') || fieldKey.includes('paragraph') ? (
              <textarea
                value={fieldValue}
                onChange={(e) => handleFieldChange(sectionId, fieldPath, e.target.value)}
                onFocus={() => setEditingField(fullPath)}
                onBlur={() => setEditingField('')}
                rows={4}
                className={`w-full px-4 py-3 bg-white/5 border ${isEditing ? 'border-cyan-500/50' : 'border-white/20'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none`}
              />
            ) : (
              <input
                type="text"
                value={fieldValue}
                onChange={(e) => handleFieldChange(sectionId, fieldPath, e.target.value)}
                onFocus={() => setEditingField(fullPath)}
                onBlur={() => setEditingField('')}
                className={`w-full px-4 py-3 bg-white/5 border ${isEditing ? 'border-cyan-500/50' : 'border-white/20'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all`}
              />
            )}
            {isEditing && (
              <div className="absolute -right-2 -top-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
            )}
          </div>
        </div>
      );
    }

    if (Array.isArray(fieldValue)) {
      return (
        <div key={fullPath} className="space-y-3">
          <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
            <List className="w-4 h-4 text-cyan-400" />
            {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)}
          </label>
          <div className="space-y-3">
            {fieldValue.map((item, index) => (
              <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                    <GripVertical className="w-4 h-4" />
                    <span>Item {index + 1}</span>
                  </div>
                  <button
                    onClick={() => {
                      const newArray = fieldValue.filter((_, i) => i !== index);
                      handleFieldChange(sectionId, fieldPath, newArray);
                    }}
                    className="p-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {typeof item === 'string' ? (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newArray = [...fieldValue];
                      newArray[index] = e.target.value;
                      handleFieldChange(sectionId, fieldPath, newArray);
                    }}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                ) : (
                  <div className="space-y-4">
                    {Object.entries(item).map(([key, value]) => (
                      <div key={key} className="pl-4 border-l-2 border-white/10">
                        {renderField(sectionId, key, value, `${fieldPath}.${index}.${key}`)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button
              onClick={() => {
                const newArray = [...(fieldValue || [])];
                let newItem: any = '';
                
                if (newArray.length > 0) {
                  const template = newArray[0];
                  if (typeof template === 'string') {
                    newItem = '';
                  } else if (typeof template === 'object' && template !== null) {
                    // Create an empty template based on the first item's keys
                    newItem = {};
                    Object.keys(template).forEach(k => {
                      if (Array.isArray(template[k])) newItem[k] = [];
                      else if (typeof template[k] === 'object') newItem[k] = {};
                      else newItem[k] = '';
                    });
                  }
                }
                
                newArray.push(newItem);
                handleFieldChange(sectionId, fieldPath, newArray);
              }}
              className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 border-dashed rounded-xl text-cyan-400 hover:text-cyan-300 transition-all font-medium"
            >
              <Plus className="w-4 h-4" />
              Add New Item
            </button>
          </div>
        </div>
      );
    }

    if (typeof fieldValue === 'object' && fieldValue !== null) {
      return (
        <div key={fullPath} className="space-y-3">
          <label className="text-sm font-medium text-gray-300">{fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)}</label>
          <div className="pl-4 border-l-2 border-cyan-500/30 space-y-3">
            {Object.entries(fieldValue).map(([subKey, subValue]) =>
              renderField(sectionId, subKey, subValue, `${fieldPath}.${subKey}`)
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  const sections = Object.keys(pageData);

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0E27]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">Editing: {pageName}</h1>
                <p className="text-xs text-gray-500">{sections.length} sections available</p>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${showPreview
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-cyan-400 border border-white/10'
                  }`}
              >
                {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showPreview ? 'Hide' : 'Show'} Preview</span>
              </button>

              <button
                onClick={handleReset}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-xl text-gray-400 hover:text-red-400 transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleSave}
                className="group relative px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 rounded-xl text-white font-medium transition-all flex items-center gap-2 shadow-lg"
              >
                {saved ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className={`grid ${showPreview ? 'lg:grid-cols-2' : 'lg:grid-cols-12'} gap-8`}>
          {/* Sidebar - Section Navigation */}
          {!showPreview && (
            <div className="lg:col-span-3 space-y-4">
              <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <List className="w-5 h-5 text-cyan-400" />
                  Sections
                </h3>
                <div className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`w-full px-4 py-3 rounded-xl text-left transition-all flex items-center gap-3 ${activeSection === section
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-white'
                        : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      <Edit className="w-4 h-4" />
                      <span className="font-medium">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Editor Panel */}
          <div className={showPreview ? '' : 'lg:col-span-9'}>
            <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section
                    </h2>
                    <p className="text-sm text-gray-500">Edit the content below</p>
                  </div>
                </div>
              </div>

              {activeSection && pageData[activeSection] && (
                <div className="space-y-6">
                  {Object.entries(pageData[activeSection]).map(([key, value]) =>
                    renderField(activeSection, key, value, key)
                  )}
                </div>
              )}

              {!activeSection && (
                <div className="text-center py-12 text-gray-500">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select a section to start editing</p>
                </div>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-cyan-400" />
                  Live Preview
                </h2>
                <p className="text-sm text-gray-500">Changes appear in real-time</p>
              </div>

              {activeSection && pageData[activeSection] && (
                <div className="space-y-6 p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="space-y-4">
                    {Object.entries(pageData[activeSection]).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{key}</div>
                        <div className="text-white">
                          {typeof value === 'string' && <p className="leading-relaxed">{value}</p>}
                          {Array.isArray(value) && (
                            <ul className="space-y-2">
                              {value.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-cyan-400">•</span>
                                  <span>{typeof item === 'string' ? item : JSON.stringify(item)}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {typeof value === 'object' && !Array.isArray(value) && (
                            <pre className="text-xs text-gray-400 overflow-x-auto p-3 bg-black/20 rounded-lg">
                              {JSON.stringify(value, null, 2)}
                            </pre>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Save Success Popup - Placed at bottom to guarantee top z-index */}
      {showSavePopup && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 backdrop-blur-md shadow-2xl">
          <div className="relative z-[999999] bg-[#0A0E27] border border-cyan-500/30 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl shadow-cyan-500/40 transform transition-all duration-300 scale-100 opacity-100">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-cyan-500/30">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Success!</h3>
              <p className="text-gray-400">Your changes to "{pageName}" have been successfully saved and published.</p>
              <button 
                onClick={() => setShowSavePopup(false)}
                className="w-full mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-500/30 rounded-xl text-white transition-all font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}