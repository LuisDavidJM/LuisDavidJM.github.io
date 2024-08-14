import time
import requests

url = "https://clinicaodontologica.onrender.com"

def ping_app():
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print("La aplicación está activa.")
        else:
            print(f"Error: Código de estado {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error al hacer ping: {e}")

if __name__ == "__main__":
    while True:
        ping_app()
        time.sleep(300)
