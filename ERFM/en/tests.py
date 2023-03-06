import pytest
from django.test import TestCase
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
class tests(unittest.TestCase):

    def test_page_title_check(self):

        chrome_driver = webdriver.Chrome('/home/<user>/chromedriver',chrome_options=chrome_options)
        chrome_driver.get("http://127.0.0.1:8000/")
        first_value = chrome_driver.title
        second_value = "Emergency Room Flow Manager"
        self.assertEquals(first_value,second_value)

