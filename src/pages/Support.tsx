import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <div className="container py-16 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <Icon name="HelpCircle" className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Помощь и поддержка
          </h1>
          <p className="text-lg text-muted-foreground">
            Мы поможем решить любой вопрос
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12 animate-slide-up">
          <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Онлайн-чат</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ответим в течение 5 минут
              </p>
              <Button variant="outline" className="w-full">
                Открыть чат
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Напиши нам на почту
              </p>
              <Button variant="outline" className="w-full">
                support@reviews.ru
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Звони с 9:00 до 21:00
              </p>
              <Button variant="outline" className="w-full">
                8 800 555-35-35
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>Форма обратной связи</CardTitle>
            <CardDescription>
              Опиши свою проблему, и мы свяжемся с тобой в ближайшее время
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Твое имя" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Тема обращения</Label>
              <Input id="subject" placeholder="Кратко опиши проблему" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                placeholder="Подробно опиши свой вопрос или проблему..."
                rows={6}
              />
            </div>

            <Button size="lg" className="w-full">
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Отправить сообщение
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
