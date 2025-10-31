import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Admin = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const pendingReviews = [
    {
      id: 1,
      user: 'user_12345',
      marketplace: 'Wildberries',
      seller: 'ТехноМир',
      product: 'Беспроводные наушники XYZ',
      article: 'WB-12345678',
      rating: 1,
      date: '2024-10-31',
      text: 'Продавец заблокировал мой отзыв о браке товара. Товар пришел с дефектом.',
      screenshots: 3,
      status: 'pending',
    },
    {
      id: 2,
      user: 'user_67890',
      marketplace: 'OZON',
      seller: 'МегаСтор',
      product: 'Смартфон ABC Pro',
      article: 'OZ-98765432',
      rating: 2,
      date: '2024-10-31',
      text: 'Товар не соответствует описанию.',
      screenshots: 5,
      status: 'pending',
    },
  ];

  const stats = [
    { label: 'На модерации', value: '12', icon: 'Clock', color: 'text-yellow-500' },
    { label: 'Проверено сегодня', value: '34', icon: 'CheckCircle', color: 'text-green-500' },
    { label: 'Отклонено', value: '5', icon: 'XCircle', color: 'text-red-500' },
    { label: 'Всего пользователей', value: '1,234', icon: 'Users', color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <div className="container py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Shield" className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Панель администратора
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Модерация отзывов и управление платформой
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="pt-6 text-center">
                <Icon name={stat.icon as any} className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Icon name="Clock" className="h-4 w-4" />
              На модерации
              <Badge variant="secondary" className="ml-1">
                {pendingReviews.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="approved" className="flex items-center gap-2">
              <Icon name="CheckCircle" className="h-4 w-4" />
              Одобренные
            </TabsTrigger>
            <TabsTrigger value="rejected" className="flex items-center gap-2">
              <Icon name="XCircle" className="h-4 w-4" />
              Отклоненные
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            {pendingReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="font-mono text-xs">
                          {review.article}
                        </Badge>
                        <Badge variant="secondary">
                          <Icon name="Clock" className="mr-1 h-3 w-3" />
                          Ожидает проверки
                        </Badge>
                        <Badge variant="outline">
                          <Icon name="User" className="mr-1 h-3 w-3" />
                          {review.user}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {review.product}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Icon name="Store" className="h-4 w-4" />
                          {review.marketplace}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Icon name="User" className="h-4 w-4" />
                          {review.seller}
                        </span>
                      </CardDescription>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {review.text}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">
                      <Icon name="Image" className="mr-1 h-3 w-3" />
                      {review.screenshots} скриншотов
                    </Badge>
                    <Badge variant="outline">
                      <Icon name="Calendar" className="mr-1 h-3 w-3" />
                      {review.date}
                    </Badge>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3 pt-4 border-t">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => setSelectedReview(review.id)}
                        >
                          <Icon name="Eye" className="mr-2 h-4 w-4" />
                          Просмотр
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{review.product}</DialogTitle>
                          <DialogDescription>
                            Детальный просмотр отзыва для модерации
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Пользователь:</span> {review.user}
                            </div>
                            <div>
                              <span className="font-medium">Маркетплейс:</span> {review.marketplace}
                            </div>
                            <div>
                              <span className="font-medium">Продавец:</span> {review.seller}
                            </div>
                            <div>
                              <span className="font-medium">Артикул:</span> {review.article}
                            </div>
                          </div>
                          
                          <div>
                            <p className="font-medium mb-2">Текст отзыва:</p>
                            <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                              {review.text}
                            </p>
                          </div>

                          <div>
                            <p className="font-medium mb-2">Скриншоты ({review.screenshots}):</p>
                            <div className="grid grid-cols-2 gap-2">
                              {[...Array(review.screenshots)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                                >
                                  <Icon name="Image" className="h-8 w-8 text-muted-foreground" />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="font-medium mb-2">Комментарий модератора:</p>
                            <Textarea placeholder="Добавь комментарий..." rows={3} />
                          </div>

                          <div className="flex gap-3">
                            <Button className="flex-1 bg-green-500 hover:bg-green-600">
                              <Icon name="CheckCircle" className="mr-2 h-4 w-4" />
                              Одобрить
                            </Button>
                            <Button variant="destructive" className="flex-1">
                              <Icon name="XCircle" className="mr-2 h-4 w-4" />
                              Отклонить
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="default" className="w-full bg-green-500 hover:bg-green-600">
                      <Icon name="CheckCircle" className="mr-2 h-4 w-4" />
                      Одобрить
                    </Button>
                    
                    <Button variant="destructive" className="w-full">
                      <Icon name="XCircle" className="mr-2 h-4 w-4" />
                      Отклонить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="approved">
            <Card>
              <CardContent className="py-12 text-center">
                <Icon name="CheckCircle" className="h-16 w-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Одобренные отзывы</h3>
                <p className="text-muted-foreground">
                  Здесь будут отображаться одобренные отзывы
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rejected">
            <Card>
              <CardContent className="py-12 text-center">
                <Icon name="XCircle" className="h-16 w-16 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-semibold mb-2">Отклоненные отзывы</h3>
                <p className="text-muted-foreground">
                  Здесь будут отображаться отклоненные отзывы
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
