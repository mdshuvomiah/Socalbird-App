// Admin Data Manager Component - Export/Import/Backup
import { useState } from 'react';
import { Download, Upload, Database, Trash2, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { useContent } from './ContentContext';

export function AdminDataManager() {
  const { exportContent, importContent, resetToDefaults, saveToLocalStorage } = useContent();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [importText, setImportText] = useState('');

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleExport = () => {
    try {
      const content = exportContent();
      const blob = new Blob([content], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `socalbird-content-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showMessage('success', 'Content exported successfully!');
    } catch (error) {
      showMessage('error', 'Failed to export content');
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      const content = exportContent();
      await navigator.clipboard.writeText(content);
      showMessage('success', 'Content copied to clipboard!');
    } catch (error) {
      showMessage('error', 'Failed to copy to clipboard');
    }
  };

  const handleImport = () => {
    try {
      const success = importContent(importText);
      if (success) {
        showMessage('success', 'Content imported successfully!');
        setShowImportDialog(false);
        setImportText('');
      } else {
        showMessage('error', 'Invalid JSON format');
      }
    } catch (error) {
      showMessage('error', 'Failed to import content');
    }
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          setImportText(content);
          setShowImportDialog(true);
        } catch (error) {
          showMessage('error', 'Failed to read file');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset ALL content to defaults? This cannot be undone!')) {
      resetToDefaults();
      showMessage('success', 'Content reset to defaults');
    }
  };

  const handleBackup = () => {
    saveToLocalStorage();
    showMessage('success', 'Content backed up to localStorage');
  };

  return (
    <div className="space-y-6">
      {/* Message Alert */}
      {message && (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
          message.type === 'success' 
            ? 'bg-green-500/10 border-green-500/30 text-green-400' 
            : 'bg-red-500/10 border-red-500/30 text-red-400'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span className="text-sm font-medium">{message.text}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Export */}
        <button
          onClick={handleExport}
          className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all text-left"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Export Content</h3>
              <p className="text-sm text-gray-400">Download all content as JSON file</p>
            </div>
          </div>
        </button>

        {/* Copy to Clipboard */}
        <button
          onClick={handleCopyToClipboard}
          className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all text-left"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Copy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Copy to Clipboard</h3>
              <p className="text-sm text-gray-400">Copy JSON content to clipboard</p>
            </div>
          </div>
        </button>

        {/* Import */}
        <label className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all text-left cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Import Content</h3>
              <p className="text-sm text-gray-400">Upload JSON file to restore content</p>
            </div>
          </div>
          <input
            type="file"
            accept=".json"
            onChange={handleFileImport}
            className="hidden"
          />
        </label>

        {/* Backup */}
        <button
          onClick={handleBackup}
          className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all text-left"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Backup Now</h3>
              <p className="text-sm text-gray-400">Save current state to localStorage</p>
            </div>
          </div>
        </button>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl p-6 bg-red-500/5 border border-red-500/20">
        <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Danger Zone
        </h3>
        <button
          onClick={handleReset}
          className="w-full px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 rounded-xl text-red-400 font-medium transition-all flex items-center justify-center gap-2"
        >
          <Trash2 className="w-5 h-5" />
          <span>Reset All Content to Defaults</span>
        </button>
      </div>

      {/* Import Dialog */}
      {showImportDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full rounded-3xl p-8 bg-[#0A0E27] border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Import Content</h3>
            <p className="text-sm text-gray-400 mb-6">Paste your JSON content below:</p>
            
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              rows={12}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 mb-6"
              placeholder='{"home": {...}, "about": {...}}'
            />

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowImportDialog(false);
                  setImportText('');
                }}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 font-medium transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 rounded-xl text-white font-medium transition-all"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
