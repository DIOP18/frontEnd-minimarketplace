import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Send, X } from 'lucide-react'

const ComposeMessage = ({ onSend, onCancel, users = [] }) => {
  const [recipient, setRecipient] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!recipient || !content.trim()) return

    setIsLoading(true)
    try {
      await onSend({
        recipient,
        subject: subject || 'Nouveau message',
        content: content.trim()
      })
      // Réinitialiser le formulaire
      setRecipient('')
      setSubject('')
      setContent('')
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg">Nouveau message</CardTitle>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipient">Destinataire</Label>
            <Input
              id="recipient"
              type="text"
              placeholder="Nom d'utilisateur du destinataire"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Sujet (optionnel)</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Sujet du message"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Message</Label>
            <Textarea
              id="content"
              placeholder="Tapez votre message ici..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px] resize-none"
              required
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                  handleSubmit(e)
                }
              }}
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Annuler
            </Button>
            <Button 
              type="submit" 
              disabled={!recipient || !content.trim() || isLoading}
            >
              <Send className="h-4 w-4 mr-2" />
              {isLoading ? 'Envoi...' : 'Envoyer'}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Appuyez sur Ctrl+Entrée pour envoyer rapidement
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default ComposeMessage

