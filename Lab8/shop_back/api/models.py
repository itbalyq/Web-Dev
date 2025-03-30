from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField()

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    rating = models.FloatField(default=0)
    image = models.URLField()
    link = models.URLField()
    likes = models.IntegerField(default=0) 
    category = models.ForeignKey(Category, related_name="products", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class ProductGallery(models.Model):
    product = models.ForeignKey(Product, related_name="gallery", on_delete=models.CASCADE)
    image_url = models.URLField()