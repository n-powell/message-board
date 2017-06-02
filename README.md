## Planning

1. Configuration/dependencies
  * Ember 2.13.2.
  * node 7.10.0

2. Specs
  * Spec 1: User can ask a question on the main page, How should I plan this?, Question is added to site.
  * Spec 2: User leaves an answer, I recommend planning it this way.., Answer is added to question response area.

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * About page for site description.
  * Index page for questions.
  * Question page to view responses.

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome



# message-board

This is a quick ember site based off of a message board style format. Users can input a user name, topic, and question on the main page. Other users can then check out those questions and make comments/answers. CRUD functionality for questions and model relationships.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* clone
* enter folder
* install npm
* install bower
* localhost:4200

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
