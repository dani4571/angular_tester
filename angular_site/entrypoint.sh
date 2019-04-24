cat <<EOF | tee .env
ALLOWED_HOSTS="`hostname -i`,127.0.0.1"
EOF
cd microblog/front-end
ng build
cd ../..
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py runserver 0.0.0.0:8080