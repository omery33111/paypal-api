# Generated by Django 4.2.3 on 2023-11-08 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='picture',
            field=models.ImageField(blank=True, default='https://placehold.co/300x300', null=True, upload_to=''),
        ),
    ]