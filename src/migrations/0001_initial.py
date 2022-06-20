# Generated by Django 4.0.5 on 2022-06-20 18:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('estado', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Mes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('estado', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Mes',
                'verbose_name_plural': 'Meses',
                'db_table': 'mes',
            },
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=200, null=True)),
                ('mes', models.CharField(choices=[('enero', 'Enero'), ('febrero', 'Febrero'), ('marzo', 'Marzo'), ('abril', 'Abril'), ('mayo', 'Mayo'), ('junio', 'Junio'), ('julio', 'Julio'), ('agosto', 'Agosto'), ('septiembre', 'Septiembre'), ('octubre', 'Octubre'), ('noviembre', 'Noviembre'), ('diciembre', 'Diciembre')], default='enero', max_length=50)),
                ('activo', models.BooleanField(default=True)),
                ('video', models.FileField(upload_to='videos/')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='src.categoria')),
            ],
            options={
                'verbose_name': 'video',
                'verbose_name_plural': 'Videos',
            },
        ),
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=200, unique=True, verbose_name='Username')),
                ('nombres', models.CharField(blank=True, max_length=200, null=True, verbose_name='Nombres')),
                ('apellidos', models.CharField(blank=True, max_length=200, null=True, verbose_name='Apellidos')),
                ('email', models.EmailField(max_length=150, unique=True, verbose_name='Correo Electronico')),
                ('activo', models.BooleanField(default=True)),
                ('is_superuser', models.BooleanField(default=False)),
                ('admin', models.BooleanField(default=False)),
                ('cedula', models.IntegerField(blank=True, default=0, null=True)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('fecha_actualizacion', models.DateTimeField(auto_now=True, verbose_name='actualizado')),
                ('direccion', models.CharField(blank=True, default='Las Adjuntas', max_length=100, null=True, verbose_name='Direccion')),
                ('telefono', models.CharField(blank=True, default='04242020470', max_length=50, null=True, verbose_name='Telefono')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'Usuario',
                'verbose_name_plural': 'Usuarios',
                'db_table': 'usuarios',
                'permissions': [],
            },
        ),
    ]
