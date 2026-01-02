import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ToastProvider } from './components/ui/Toast'
import { TopMenuBar } from '@/widgets/layout/TopMenuBar'

// Pages
import Home from './pages/Home'
import IDELayout from './pages/IDELayout'
import EditorView from './pages/EditorView'
import ChatPanel from './pages/ChatPanel'
import Components from './pages/Components'
import Primitives from './pages/Primitives'
import Tokens from './pages/Tokens'

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
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/primitives" element={<Primitives />} />
        <Route path="/components" element={<Components />} />
        <Route path="/ide" element={<IDELayout />} />
        <Route path="/editor" element={<EditorView />} />
        <Route path="/chat" element={<ChatPanel />} />
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
