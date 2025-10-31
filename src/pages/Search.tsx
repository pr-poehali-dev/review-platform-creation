import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Search = () => {
  const [searchType, setSearchType] = useState('article');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />

      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Search" className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Поиск отзывов
            </h1>
            <p className="text-lg text-muted-foreground">
              Найди отзыв по артикулу товара, ссылке или имени продавца
            </p>
          </div>

          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <Tabs value={searchType} onValueChange={setSearchType}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="article" className="flex items-center gap-2">
                    <Icon name="Hash" className="h-4 w-4" />
                    <span className="hidden sm:inline">Артикул</span>
                  </TabsTrigger>
                  <TabsTrigger value="link" className="flex items-center gap-2">
                    <Icon name="Link" className="h-4 w-4" />
                    <span className="hidden sm:inline">Ссылка</span>
                  </TabsTrigger>
                  <TabsTrigger value="seller" className="flex items-center gap-2">
                    <Icon name="User" className="h-4 w-4" />
                    <span className="hidden sm:inline">Продавец</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="article" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Артикул товара</label>
                    <Input
                      placeholder="Например: WB-12345678, OZ-98765432"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      Введи артикул товара с маркетплейса
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="link" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ссылка на товар</label>
                    <Input
                      placeholder="https://www.wildberries.ru/catalog/..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      Вставь полную ссылку на товар с маркетплейса
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="seller" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя продавца</label>
                    <Input
                      placeholder="Например: ТехноМир, МегаСтор"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      Введи имя продавца для поиска всех его отзывов
                    </p>
                  </div>
                </TabsContent>

                <Button 
                  size="lg" 
                  className="w-full mt-6 text-base font-semibold transition-all hover:scale-105"
                >
                  <Icon name="Search" className="mr-2 h-5 w-5" />
                  Найти отзывы
                </Button>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Быстрый поиск</h3>
                <p className="text-sm text-muted-foreground">
                  Результаты за считанные секунды
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Проверенные данные</h3>
                <p className="text-sm text-muted-foreground">
                  Все отзывы проходят модерацию
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Database" className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Большая база</h3>
                <p className="text-sm text-muted-foreground">
                  Тысячи отзывов о товарах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
