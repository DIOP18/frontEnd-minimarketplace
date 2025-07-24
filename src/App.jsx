import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Mail, Settings, User } from 'lucide-react'
import MessageList from './components/MessageList'
import MessageDetail from './components/MessageDetail'
import ComposeMessage from './components/ComposeMessage'
import SearchBar from './components/SearchBar'
import './App.css'

// Données de démonstration
const mockMessages = [
  {
    id: 1,
    sender: {
      id: 2,
      username: 'Product Owner',
      email: 'prod@example.com',
      avatar: null
    },
    receiver: {
      id: 1,
      username: 'Bakhoum',
      email: 'baxoumeezie@example.com'
    },
    content: 'Bonjour ! J\'espère que vous allez bien. Je voulais vous parler du produit. Avez-vous eu le temps de regarder les dernières modifications ?',
    timestamp: '2024-01-15T10:30:00Z',
    is_read: false
  },
  {
    id: 2,
    sender: {
      id: 3,
      username: 'Mme Ndong',
      email: 'Ndong@example.com',
      avatar: null
    },
    receiver: {
      id: 1,
      username: 'Moustapha',
      email: 'Moustapha@example.com'
    },
    content: 'Merci pour votre présentation hier. Elle était très claire et bien structurée. J\'ai quelques questions à vous poser si vous avez un moment.',
    timestamp: '2024-01-15T09:15:00Z',
    is_read: true
  },
  {
    id: 3,
    sender: {
      id: 4,
      username: 'Soda',
      email: 'soda@example.com',
      avatar: null
    },
    receiver: {
      id: 1,
      username: 'Elmor',
      email: 'El@example.com'
    },
    content: 'Pouvez-vous me confirmer l\'heure de livraison ? Je veux m\'assurer d\'être à l\'heure.',
    timestamp: '2024-01-14T16:45:00Z',
    is_read: true
  },
  {
    id: 4,
    sender: {
      id: 5,
      username: 'Bakeli',
      email: 'bakeli@example.com',
      avatar: null
    },
    receiver: {
      id: 1,
      username: 'Groupe5',
      email: 'g5@example.com'
    },
    content: 'Félicitations pour votre promotion ! Vous le méritez vraiment. J\'ai hâte de travailler avec vous dans votre nouveau rôle.',
    timestamp: '2024-01-14T14:20:00Z',
    is_read: false
  },
  {
    id: 5,
    sender: {
      id: 6,
      username: 'Resposable technique',
      email: 'rst@example.com',
      avatar: null
    },
    receiver: {
      id: 1,
      username: 'groupe5',
      email: 'g5@example.com'
    },
    content: 'N\'oubliez pas notre déjeuner de vendredi ! J\'ai réservé une table au restaurant dont nous avions parlé.',
    timestamp: '2024-01-14T11:30:00Z',
    is_read: true
  }
]

function App() {
  const [messages, setMessages] = useState(mockMessages)
  const [filteredMessages, setFilteredMessages] = useState(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [isComposing, setIsComposing] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Filtrer les messages en fonction de la recherche
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMessages(messages)
    } else {
      const filtered = messages.filter(message =>
        message.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.sender.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredMessages(filtered)
    }
  }, [searchTerm, messages])

  const handleMessageSelect = (message) => {
    setSelectedMessage(message)
    setIsComposing(false)
    
    // Marquer le message comme lu
    if (!message.is_read) {
      setMessages(prev => prev.map(msg => 
        msg.id === message.id ? { ...msg, is_read: true } : msg
      ))
    }
  }

  const handleComposeNew = () => {
    setIsComposing(true)
    setSelectedMessage(null)
  }

  const handleSendMessage = async (messageData) => {
    // Simuler l'envoi d'un message
    const newMessage = {
      id: Date.now(),
      sender: {
        id: 1,
        username: 'Bakhoum',
        email: 'bakhoumeze@example.com',
        avatar: null
      },
      receiver: {
        id: Date.now() + 1,
        username: messageData.recipient,
        email: `${messageData.recipient}@example.com`
      },
      content: messageData.content,
      timestamp: new Date().toISOString(),
      is_read: true
    }

    setMessages(prev => [newMessage, ...prev])
    setIsComposing(false)
    
    // Simuler une réponse automatique après 2 secondes
    setTimeout(() => {
      const autoReply = {
        id: Date.now() + 1000,
        sender: {
          id: Date.now() + 1,
          username: messageData.recipient,
          email: `${messageData.recipient}@example.com`,
          avatar: null
        },
        receiver: {
          id: 1,
          username: 'groupe5',
          email: 'g5@example.com'
        },
        content: 'Merci pour votre message ! Je vous répondrai dès que possible.',
        timestamp: new Date().toISOString(),
        is_read: false
      }
      setMessages(prev => [autoReply, ...prev])
    }, 2000)
  }

  const handleReply = async (recipientId, content) => {
    // Simuler l'envoi d'une réponse
    const replyMessage = {
      id: Date.now(),
      sender: {
        id: 1,
        username: 'Bakeli',
        email: 'bakeli@example.com',
        avatar: null
      },
      receiver: selectedMessage.sender,
      content: content,
      timestamp: new Date().toISOString(),
      is_read: true
    }

    setMessages(prev => [replyMessage, ...prev])
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
  }

  const unreadCount = messages.filter(msg => !msg.is_read).length

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* En-tête de l'application */}
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Messagerie</h1>
            {unreadCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                {unreadCount} nouveau{unreadCount > 1 ? 'x' : ''}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleComposeNew}
              size="sm"
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Nouveau</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Corps principal de l'application */}
      <div className="flex-1 flex overflow-hidden">
        {/* Panneau de gauche - Liste des messages */}
        <div className="w-1/3 min-w-[300px] flex flex-col bg-card">
          <SearchBar
            onSearch={handleSearch}
            onClear={handleClearSearch}
            placeholder="Rechercher dans les messages..."
          />
          <MessageList
            messages={filteredMessages}
            onMessageSelect={handleMessageSelect}
            selectedMessageId={selectedMessage?.id}
          />
        </div>

        {/* Panneau de droite - Détails du message ou composition */}
        <div className="flex-1 bg-background">
          {isComposing ? (
            <ComposeMessage
              onSend={handleSendMessage}
              onCancel={() => setIsComposing(false)}
            />
          ) : (
            <MessageDetail
              message={selectedMessage}
              onReply={handleReply}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App

