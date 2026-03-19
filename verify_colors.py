from playwright.sync_api import sync_playwright
import time
import os

def verify_frontend():
    os.makedirs('/home/jules/verification', exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(
            viewport={'width': 1280, 'height': 720},
            record_video_dir='/home/jules/verification'
        )

        # Visitar la página
        page.goto('http://localhost:8000')
        page.wait_for_load_state('networkidle')

        # Tomar captura de la landing page (ver fondo principal, CTA)
        page.screenshot(path='/home/jules/verification/landing.png')

        # Hacer click en el CTA
        cta_button = page.locator('#start-btn')
        cta_button.click()

        # Esperar a que la transición termine (0.5s en CSS)
        time.sleep(1)

        # Tomar captura del camino (ver colores de surface en polaroids)
        page.screenshot(path='/home/jules/verification/path.png')

        # Hacer click en la primera polaroid
        first_polaroid = page.locator('.polaroid').first
        first_polaroid.click()

        # Esperar a que el modal se muestre
        time.sleep(1)

        # Tomar captura del modal (ver descripción, flecha animada y color surface)
        page.screenshot(path='/home/jules/verification/modal.png')

        browser.close()

verify_frontend()
