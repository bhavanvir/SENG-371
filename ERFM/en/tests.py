import pytest
from django.test import Client, TestCase
from selenium import webdriver
import unittest
import selenium
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

# Create your tests here.
@pytest.mark.usefixtures("setup")
class TestPageTitle(TestCase):
    def setUp(self):
        self.client = Client()

    def test_page_title(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Emergency Room Flow Manager")
        content = str(response.content, 'utf-8')
        self.assertIn('<title>Emergency Room Flow Manager</title>', content)

class TestMapExists(TestCase):
    def setUp(self):
        self.client = Client()
    
    def test_map_exists(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        content = str(response.content, 'utf-8')
        self.assertIn('<div id="map"></div>', content)