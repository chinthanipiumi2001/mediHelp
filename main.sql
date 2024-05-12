CREATE ROLE piumi WITH LOGIN PASSWORD 'piumi';
CREATE DATABASE medihelp WITH OWNER = piumi;
GRANT ALL PRIVILEGES ON DATABASE medihelp TO piumi;

/* registered users watch*/
SELECT * FROM auth_user;