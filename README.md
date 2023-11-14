# WidgetsDashboard

## gh-pages

The application deployment is located at https://ivankuznetsov96dev.github.io/widgets-dashboard/

## Info

This is test app including two main goals

## Task 1

Create a single page web application using Angular/Material/Tailwind/rxjs.
The application should be a simple chart widgets dashboard. On a dashboard user can put 1 to 4 charts. Optional: Make charts as directive.On the top bar it should be possible to set a date period that will be applied to all charts at the same time.
Every chart should be configurable: 
-type: line or bar chart-selection of sensors
-color of lines For data shown in charts generate random values or use some public data API (optional). 

Example: There are N sensors, some of them measure temperature, some -humidity, some -light. We need to show that data on different charts. Sometimes we can combine temperature from 2 sensors and humidity and all in 1 chart. 

Other libraries that could be used:
-angular ui bootstrap or analogue 
-angular ui router or analogue-highcharts or analogue

## Task 2

Расширить функциональность mat-button. 
Кнопка должна быть неактивна, если  пользователю не хватает прав.
Пользователь должен быть проинформирован об этом через всплывающую подсказку( tooltip).

Кнопка должна быть дизейбл, если [isViewerDisabled]=’true’.
Текст подсказки задается через отдельное поле. (например viewerTooltip).

Новая функциональность не должна конфликтовать с существующей.
**New: Сделать возможность расширения функционала любой кнопки mat-button

Дополнительно: неактивность кнопки -  это
*Вид кнопки disabled (https://material.angular.io/components/button/overview )
*При hover такой кнопки 
  **курсор меняется на not-allowed (https://css-tricks.com/almanac/properties/c/cursor/)
  **Показывается тултип с текстом почему кнопка не активна

## CLI Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
