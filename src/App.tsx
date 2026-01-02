import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ToastProvider } from './components/ui/Toast'
import { TopMenuBar } from '@/ui/layout/TopMenuBar'

// Pages
import Home from './pages/Home'
import IDELayout from './pages/IDELayout'
import EditorView from './pages/EditorView'
import ChatPanel from './pages/ChatPanel'
import Components from './pages/Components'

function AppContent() {
  const location = useLocation()

  // Full-screen layouts that use auto-hide menu
  const fullscreenPaths = ['/ide', '/editor']
  const isFullscreen = fullscreenPaths.includes(location.pathname)

  return (
    <>
      <TopMenuBar autoHide={isFullscreen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ide" element={<IDELayout />} />
        <Route path="/editor" element={<EditorView />} />
        <Route path="/chat" element={<ChatPanel />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
