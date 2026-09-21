package com.tddworkshops.todolist;

import com.microsoft.playwright.Page;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import com.microsoft.playwright.junit.UsePlaywright;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

@UsePlaywright(PlaywrightOptionsFactory.class)
@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
class TodoAppTest {

  private static final String TEST_HOST = "/";

  @Test
  @Order(1)
  void has_title(Page page) {
    page.navigate(TEST_HOST);
    var locator = page.locator("h1");
    assertThat(locator).hasText("To Do List");
  }
}
