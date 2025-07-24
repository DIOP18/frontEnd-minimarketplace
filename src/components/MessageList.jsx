import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

const MessageList = ({ messages, onMessageSelect, selectedMessageId }) => {
  return (
    <div className="h-full border-r border-border">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Messages</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-2">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => onMessageSelect(message)}
              className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-accent mb-2 ${
                selectedMessageId === message.id ? 'bg-accent' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={message.sender.avatar} />
                  <AvatarFallback>
                    {message.sender.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground truncate">
                      {message.sender.username}
                    </p>
                    <div className="flex items-center space-x-2">
                      {!message.is_read && (
                        <Badge variant="default" className="h-2 w-2 p-0 rounded-full" />
                      )}
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(message.timestamp), {
                          addSuffix: true,
                          locale: fr
                        })}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground truncate mt-1">
                    {message.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default MessageList

