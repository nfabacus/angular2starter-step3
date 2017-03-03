# Angular2starter Step 3
Just following a tutorial on Udemy on Angular 2.

Step 2:
- One Way Data Binding (from component class to template)

Step 3:
- Two Way Data Binding (from template to component class via ngModel)
  Example: searchBox in app.component.htm and .ts.
  * Make sure to import FormsModule in app.module.ts
- Event Binding
  Example: toggleImage() and showImage variable in books-list.component.ts

- Directives:
  3 types of Directives
  1. Component Directives
     eg. <bs-app></bs-app>
  2. Structural Directives
     eg. ngIf, ngFor, ngStyle
  3. Attribute Directives
     eg. <p highlight></p>

- Pipes:
  1. Built-in Pipes
     e.g. |currencies
          <p><b>Published On:</b>{{book.publishedOn | date:'longDate'}}</p>
          <h4 class="pull-right">
            {{book.bookPrice | currency:'USD':true}}
          </h4>

  2. Custom Pipes
      Check the custome pipe created in shared folder->pipes folder.
