# Generated by Django 4.1.6 on 2023-02-20 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='created_listings',
            field=models.ManyToManyField(blank=True, related_name='creators', to='auctions.listing'),
        ),
    ]
