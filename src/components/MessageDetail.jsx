import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send, Reply, MoreVertical } from 'lucide-react'
import { useState } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const MessageDetail = ({ message, onReply }) => {
  const [replyText, setReplyText] = useState('')
  const [isReplying, setIsReplying] = useState(false)

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(message.sender.id, replyText)
      setReplyText('')
      setIsReplying(false)
    }
  }

  if (!message) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <div className="text-center">
          <p className="text-lg mb-2">Sélectionnez un message</p>
          <p className="text-sm">Choisissez un message dans la liste pour le voir ici</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      {/* En-tête du message */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={message.sender.avatar} />
              <AvatarFallback>
                {message.sender.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{message.sender.username}</h3>
              <p className="text-sm text-muted-foreground">
                {format(new Date(message.timestamp), 'PPpp', { locale: fr })}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Contenu du message */}
      <ScrollArea className="flex-1 p-4">
        <div className="prose prose-sm max-w-none">
          <p className="text-foreground whitespace-pre-wrap">{message.content}</p>
        </div>
      </ScrollArea>

      {/* Zone de réponse */}
      <div className="p-4 border-t border-border">
        {!isReplying ? (
          <Button
            onClick={() => setIsReplying(true)}
            className="w-full"
            variant="outline"
          >
            <Reply className="h-4 w-4 mr-2" />
            Répondre
          </Button>
        ) : (
          <div className="space-y-3">
            <Textarea
              placeholder="Tapez votre réponse..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="min-h-[100px] resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                  handleReply()
                }
              }}
            />
            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={() => {
                  setIsReplying(false)
                  setReplyText('')
                }}
              >
                Annuler
              </Button>
              <Button onClick={handleReply} disabled={!replyText.trim()}>
                <Send className="h-4 w-4 mr-2" />
                Envoyer
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Appuyez sur Ctrl+Entrée pour envoyer rapidement
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageDetail

