import { useState } from 'react';
import { 
  Home, FileText, Users, Bot, Code, Smartphone, MessageSquare, 
  Settings, LogOut, Save, Eye, Edit, BarChart3, TrendingUp, 
  Clock, CheckCircle, Sparkles, ChevronRight, Search, Bell,
  Download, Upload, Globe, Layers, Database
} from 'lucide-react';
import { AdminDataManager } from './AdminDataManager';

interface AdminDashboardPageProps {
  onLogout: () => void;
  onNavigateToEditor: (page: string) => void;
}

export function AdminDashboardPage({ onLogout, onNavigateToEditor }: AdminDashboardPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const pages = [
    { 
      id: 'brand', 
      name: 'Brand Settings', 
      icon: Settings, 
      color: 'from-yellow-500 to-orange-500',
      sections: 1,
      lastEdited: 'Just now',
      status: 'Active'
    },
    { 
      id: 'home', 
      name: 'Home Page', 
      icon: Home, 
      color: 'from-cyan-500 to-blue-500',
      sections: 10,
      lastEdited: '2 hours ago',
      status: 'Published'
    },
    { 
      id: 'about', 
      name: 'About Page', 
      icon: Users, 
      color: 'from-blue-500 to-purple-500',
      sections: 6,
      lastEdited: '1 day ago',
      status: 'Published'
    },
    { 
      id: 'web-development', 
      name: 'Web Development', 
      icon: Code, 
      color: 'from-purple-500 to-pink-500',
      sections: 7,
      lastEdited: '3 days ago',
      status: 'Published'
    },
    { 
      id: 'app-development', 
      name: 'App Development', 
      icon: Smartphone, 
      color: 'from-pink-500 to-rose-500',
      sections: 7,
      lastEdited: '3 days ago',
      status: 'Published'
    },
    { 
      id: 'ai-chatbot', 
      name: 'AI Chatbot Solutions', 
      icon: Bot, 
      color: 'from-green-500 to-teal-500',
      sections: 8,
      lastEdited: '5 days ago',
      status: 'Published'
    },
    { 
      id: 'portfolio', 
      name: 'Portfolio', 
      icon: Layers, 
      color: 'from-orange-500 to-amber-500',
      sections: 6,
      lastEdited: '1 week ago',
      status: 'Published'
    },
    { 
      id: 'contact', 
      name: 'Contact Page', 
      icon: MessageSquare, 
      color: 'from-teal-500 to-cyan-500',
      sections: 3,
      lastEdited: '2 weeks ago',
      status: 'Published'
    },
    { 
      id: 'footer', 
      name: 'Footer Content', 
      icon: FileText, 
      color: 'from-indigo-500 to-blue-500',
      sections: 4,
      lastEdited: '1 month ago',
      status: 'Published'
    }
  ];

  const stats = [
    { 
      label: 'Total Pages', 
      value: '8', 
      change: '+0%', 
      icon: Globe, 
      color: 'from-cyan-500 to-blue-500' 
    },
    { 
      label: 'Content Sections', 
      value: '49', 
      change: '+12%', 
      icon: Layers, 
      color: 'from-blue-500 to-purple-500' 
    },
    { 
      label: 'Last Updated', 
      value: '2h ago', 
      change: 'Active', 
      icon: Clock, 
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      label: 'All Published', 
      value: '100%', 
      change: 'Live', 
      icon: CheckCircle, 
      color: 'from-pink-500 to-rose-500' 
    }
  ];

  const recentActivity = [
    { page: 'Home Page', action: 'Hero section updated', time: '2 hours ago', user: 'Admin' },
    { page: 'About Page', action: 'Team section edited', time: '1 day ago', user: 'Admin' },
    { page: 'AI Chatbot', action: 'Pricing updated', time: '5 days ago', user: 'Admin' },
    { page: 'Portfolio', action: 'New project added', time: '1 week ago', user: 'Admin' }
  ];

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0E27]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SocalBird Admin</h1>
                <p className="text-xs text-gray-500">Content Management System</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Bell className="w-5 h-5" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full" />
              </button>

              <div className="h-8 w-px bg-white/10" />

              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-xl text-gray-400 hover:text-red-400 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500" />
            </div>
            
            <div className="relative flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Admin! 👋</h2>
                <p className="text-gray-400">Manage your website content from one central dashboard</p>
              </div>

              <div className="flex gap-3">
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>Export</span>
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 rounded-xl text-white font-medium transition-all flex items-center gap-2 shadow-lg">
                  <Upload className="w-5 h-5" />
                  <span>Import</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`} />
                </div>

                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-cyan-400">{stat.change}</div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pages List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Content Pages</h3>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-4">
                {filteredPages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => onNavigateToEditor(page.id)}
                    className="group relative rounded-2xl p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-left overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-5`} />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    </div>

                    <div className="relative flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${page.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <page.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-white">{page.name}</h4>
                          <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-400">
                            {page.status}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Layers className="w-4 h-4" />
                            <span>{page.sections} sections</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Edited {page.lastEdited}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-white/5 rounded-lg flex items-center gap-2 text-sm text-gray-400">
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Data Manager Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Database className="w-6 h-6 text-cyan-400" />
                  Data Management
                </h3>
                <AdminDataManager />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  Recent Activity
                </h3>

                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Edit className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{activity.page}</p>
                          <p className="text-xs text-gray-500 truncate">{activity.action}</p>
                          <p className="text-xs text-gray-600 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Quick Actions
                </h3>

                <div className="space-y-2">
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl text-left transition-all flex items-center gap-3">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium text-white">Preview Site</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl text-left transition-all flex items-center gap-3">
                    <Save className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium text-white">Save All Changes</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl text-left transition-all flex items-center gap-3">
                    <Settings className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium text-white">Site Settings</span>
                  </button>
                </div>
              </div>

              {/* Tips */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Pro Tip</h4>
                    <p className="text-xs text-gray-400">Click on any page to edit its content. Changes are saved automatically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}