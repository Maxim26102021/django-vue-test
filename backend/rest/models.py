from django.db import models

# Create your models here.

class Articles(models.Model):
    title = models.CharField('Название', max_length=50)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Data(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
