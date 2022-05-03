# Generated by Django 4.0.3 on 2022-04-26 19:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_user_user_name'),
        ('daily_stats', '0002_alter_daily_attempts_alter_daily_word_length_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='daily',
            name='user',
            field=models.ForeignKey(default='username', on_delete=django.db.models.deletion.CASCADE, to='user.user'),
            preserve_default=False,
        ),
    ]