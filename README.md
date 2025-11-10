# WeatherGo

WeatherPage is a web application for querying temperature, humidity and weather at a specific coordinate using an external weather API. It features user authentication.

## Features

- User login
- Check the weather characteristics in different places
- Local and production-ready configuration

## Run in local

1. **Backend setup**

- Create a virtual environment

    ```
    cd backend
    python -m venv venv
    ```

- Activate virtual environment

    `venv\Scripts\activate`

- Install dependencies

    `pip install -r requirements.txt`

- Run migrations

    `python manage.py migrate`

- Run the Django server

    `python manage.py runserver`

2. **Frontend setup**

- Go to frontend folder

    ```
    cd ..
    cd frontend
    ```

- Install dependencies

    `npm install`

- Start frontend dev server

    `npm run dev`


