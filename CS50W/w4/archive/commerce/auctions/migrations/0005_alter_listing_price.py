# Generated by Django 4.1.6 on 2023-02-18 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0004_alter_listing_category_alter_listing_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=8),
        ),
    ]
