from rest_framework import serializers
from .models import Product, Category, ProductGallery

class ProductGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGallery
        fields = ['image_url']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    categoryId = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source="category"
    )
    gallery = ProductGallerySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'categoryId', 'name', 'description', 'price', 'rating', 'image', 'link', 'likes', 'gallery']
