# Star Bucks Website

- To import a library from CSS from another CSS file
    
    ```css
    @import url("./box.css");
    ```
    
- In CSS dot represent every tag within html file.
- The CSS will connect to class within tag with **.** in front
    
    HTML:
    
    ```html
    <div>
    	<ul>
    		<span class="orange">사과</span>
    		<li id="orange">사과</li>
    		<li class="orange">Different</li>
    	</ul>
    </div>
    ```
    
    CSS:
    
    ```css
    .orange {
    	color: red;
    }
    ```
    
    For ID (CSS):
    
    ```css
    #orange {
    	color: blue;
    }
    ```
    
    For different tag (CSS):
    
    ```css
    span.orange {
    	color: yellow;
    }
    ```
    
    General Sibling Combinator:
    
    ```css
    .orange ~ li {
    	color: white;
    }
    ```
    
    Basic tagging technique:
    
    **Classes**:
    
    - Basic combinator
        - `span.orange`
    - Child combinator
        - `ul > .orange`
        - Selects all elements that are the children of a specified element.
    - Descendant Combinator
        - `div .orange`
    - Adjacent Sibling Combinator
        - `.orange + li`
        - Will choose the next described library (if there are multiple li tag after the orange class, the first tag will be selected)
    - General Sibling Combinator
        - `.orange ~ li`
        - Will choose all the proceeding li tags
    
    **Pseudo-Classes:**
    
    - HOVER
        - `a:hover`
        - For example
            
            ```css
            <a href="https://www.naver.com">Naver<\a>
            ```
            
    - Active
        - `a:active`
    - Focus
        - `a:focus`
    - First Child
        - `.fruit span:first-child`
    - Nth Child
        - `.fruit *:nth-child(2)`
        - Can select multiple children based on a condition.
    - Not
        - `.fruit *:not(span)`
        - Every tag but span
    
    Pseudo-Elements
    
    - Before & After
        - .`box::before` `.box::after`
        - puts element either before or after the tag element is displayed.
    
    Attribute:
    
    `[type = “password”]`
    

GSAP $ ScrollToPlugin

- GSAP (The GreenSock animation Platform)
    - GSAP is a timeline animation js library.
- ScrollToPlugin
    - is a GSAP plugin that adds animation to the scroll

JS Strict Mode 

- ‘Strict Mode’ is a ECMAScript 5 convention that enforces specified rules such as
    - Users in strict mode cannot use undeclared variables.

- When creating a tag within HTML, we can stack multiple class information onto one tag
    
    ```html
    <div class="more back-to-position to-right delay-3">
    ```
    
    To access these in CSS
    
    ```css
    .back-to-position.to-right {
    	...
    };
    ```
    

CSS

- Z-Index
    - Represents the current stack level of the box in the current stacking context.
- Selectors:
    - when selecting a single class
        
        `.something`
        
    - When selecting all elements with both name1 and name2 set within its class attribute
        
        `.something1.something2`
        
    - Select all elements with name2 that is a descendant of a element with name1
        
        `.name1 .name2` 
        
         
        

Java Script

- Although the JS can automatically fill in the semicolons, it is generally better to set it by hand.
- `something.**document**.something()`
    
    document represents the web page. 
    
    If one wishes to access any element in an HTML page, you always start with accessing the document object. 
    
- `something.**querySelector()**`
    
    Returns the first element that matches a **CSS selectors**.
    

### Variables:

- **Window**
    - Window variable means that the variable is being declared at the global scope in JavaScript
- querySelecterAll
    - Brings in all the elements within the tag in a list form
    
    ```jsx
    const fadeEls = document.querySelectorAll('.visual .fade-in')
    // handle all the fadeEls variables
    fadeEls.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
            delay: (index + 1) * .7,
            opacity:1
        })
    })
    ```
    
- element.**classList**
    - classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
