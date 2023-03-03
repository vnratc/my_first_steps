# Generated by Django 4.1.6 on 2023-03-03 07:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0006_user_followers_user_follows'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='posts',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='posters', to='network.post'),
        ),
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='user_posts', to=settings.AUTH_USER_MODEL),
        ),
    ]
