import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userReviews = [
    {
      id: 1,
      product: 'Беспроводные наушники XYZ',
      marketplace: 'Wildberries',
      status: 'verified',
      date: '2024-10-30',
      views: 234,
    },
    {
      id: 2,
      product: 'Смартфон ABC Pro',
      marketplace: 'OZON',
      status: 'moderation',
      date: '2024-10-29',
      views: 12,
    },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Navigation />
        
        <div className="container py-16">
          <div className="max-w-md mx-auto">
            <Card className="animate-scale-in">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Войти в аккаунт</CardTitle>
                <CardDescription>
                  Войди или зарегистрируйся, чтобы оставлять отзывы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button 
                  className="w-full"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Войти
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Или
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Личный кабинет
          </h1>
          <p className="text-lg text-muted-foreground">
            Управляй своими отзывами
          </p>
        </div>

        <Tabs defaultValue="reviews" className="space-y-6">
          <TabsList>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <Icon name="FileText" className="h-4 w-4" />
              Мои отзывы
            </TabsTrigger>
            <TabsTrigger value="new" className="flex items-center gap-2">
              <Icon name="PenSquare" className="h-4 w-4" />
              Новый отзыв
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Icon name="Settings" className="h-4 w-4" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Статистика</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Всего отзывов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">1</div>
                    <div className="text-sm text-muted-foreground">Проверено</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">246</div>
                    <div className="text-sm text-muted-foreground">Просмотров</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {userReviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={review.status === 'verified' ? 'default' : 'secondary'}>
                            {review.status === 'verified' ? (
                              <>
                                <Icon name="CheckCircle" className="mr-1 h-3 w-3" />
                                Проверено
                              </>
                            ) : (
                              <>
                                <Icon name="Clock" className="mr-1 h-3 w-3" />
                                На модерации
                              </>
                            )}
                          </Badge>
                          <Badge variant="outline">{review.marketplace}</Badge>
                        </div>
                        <CardTitle className="text-lg">{review.product}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span>{review.date}</span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" className="h-3 w-3" />
                            {review.views}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Trash2" className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Добавить новый отзыв</CardTitle>
                <CardDescription>
                  Все поля обязательны для заполнения. Отзыв будет проверен модератором перед публикацией.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="marketplace">Маркетплейс</Label>
                    <Select>
                      <SelectTrigger id="marketplace">
                        <SelectValue placeholder="Выбери маркетплейс" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wildberries">Wildberries</SelectItem>
                        <SelectItem value="ozon">OZON</SelectItem>
                        <SelectItem value="yandex">Яндекс Маркет</SelectItem>
                        <SelectItem value="magnit">Магнит Маркет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seller">Имя продавца</Label>
                    <Input id="seller" placeholder="Например: ТехноМир" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Название товара</Label>
                  <Input id="product" placeholder="Беспроводные наушники XYZ" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="article">Артикул товара</Label>
                  <Input id="article" placeholder="WB-12345678" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link">Ссылка на товар</Label>
                  <Input id="link" placeholder="https://www.wildberries.ru/catalog/..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">Оценка</Label>
                  <Select>
                    <SelectTrigger id="rating">
                      <SelectValue placeholder="Выбери оценку" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">⭐ 1 - Ужасно</SelectItem>
                      <SelectItem value="2">⭐⭐ 2 - Плохо</SelectItem>
                      <SelectItem value="3">⭐⭐⭐ 3 - Нормально</SelectItem>
                      <SelectItem value="4">⭐⭐⭐⭐ 4 - Хорошо</SelectItem>
                      <SelectItem value="5">⭐⭐⭐⭐⭐ 5 - Отлично</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание проблемы</Label>
                  <Textarea
                    id="description"
                    placeholder="Подробно опиши ситуацию: что случилось, как отреагировал продавец, почему отзыв был удален..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Скриншоты удаленного отзыва</Label>
                  <Card className="border-2 border-dashed hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Icon name="Upload" className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Нажми или перетащи файлы сюда
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG до 10MB (максимум 10 файлов)
                      </p>
                    </CardContent>
                  </Card>
                  <p className="text-xs text-muted-foreground">
                    Загрузи оригинальные скриншоты с твоим отзывом. Личные данные будут скрыты модератором перед публикацией.
                  </p>
                </div>

                <Button size="lg" className="w-full">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить на модерацию
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Настройки профиля</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя пользователя</Label>
                  <Input id="name" defaultValue="Пользователь_2024" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-settings">Email</Label>
                  <Input id="email-settings" type="email" defaultValue="user@example.com" />
                </div>
                <Button>Сохранить изменения</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
