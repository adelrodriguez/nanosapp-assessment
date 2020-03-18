install_client:
	cd client && npm install

install_server:
	cd server && npm install

install: install_client install_server

build_server:
	cd server && npm run build

build_client:
	cd client && npm run build

build: build_server build_client

run_server:
	cd server && npm run dev

run_client:
	cd client && npm run start 
