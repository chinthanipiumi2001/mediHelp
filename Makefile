venv:
	@echo "create virtual environment"
	python -m venv env || python3 -m venv env 


version:
	@echo "\ncheck python version"
	python --version 
	@echo "\ncheck pip version"
	pip --version  
	@echo "\nCheck Django Version"
	django-admin --version
	@echo "\n"

install:
	@echo "\nInstall Django framework"
	python -m pip install Django || pip install Django

create:
	@echo "\nCreate Project"
	django-admin startproject medi_help

migrate:
	@echo "\n Migrate application"
	python medi_help/manage.py migrate

app:
	@echo "\n Create app"
	cd medi_help/ && python manage.py startapp medihelp && cd ..

run:
	@echo "\nRun application"
	python medi_help/manage.py runserver

pgsql:
	pip install pgsql

db:
	@echo"\ncreate db\n"
	mkdir db
	initdb -D ~/db

start:
	@echo "\nStart Postgresql....\n"
	pg_ctl -D ~/db start || brew services start postgresql

stop:
	@echo "\nEnd Postgresql....\n"
	pg_ctl -D ~/db stop || brew services stop postgresql

status:
	@echo "\nStatus Postgresql....\n"
	pg_ctl -D ~/db status

connect:
	@echo "\nConnect Postgresql....\n"
	psql -U piumi -d medihelp

log:
	@echo "\nLog Postgresql....\n"
	pg_ctl -D ~/db -l db.log start

restart:
	@echo "\nRestart Postgresql....\n"
	pg_ctl -D ~/db restart

test:
	@echo "\nPython testing\n"
	python smartGrader/manage.py test