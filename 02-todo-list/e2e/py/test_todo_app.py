from playwright.sync_api import expect
import pytest

testHost = 'http://localhost:5173'


def test_has_title(page):
    page.goto(testHost)
    locator = page.locator('h1')
    expect(locator).to_have_text('To Do List')
