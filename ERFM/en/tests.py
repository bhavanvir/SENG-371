import pytest

# Create your tests here.
@pytest.mark.usefixtures("setup")
class tests(unittest.TestCase):

    def test_page_title_check(self):

        chrome_driver = webdriver.Chrome()
        chrome_driver.get("http://127.0.0.1:8000/")
        first_value = chrome_driver.title
        second_value = "Emergency Room Flow Manager"
        self.assertEquals(first_value,second_value)

