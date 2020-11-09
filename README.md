WebChat
=======

An ever-growing Node-based webchat built on Express and Socket.io.

## Installation
Clone this repo by running `git clone git://github.com/frxnz/WebChat.git`

##### Install server dependencies

WebChat requires [Node](http://nodejs.org/) and [Bower](http://bower.io/) to install and run. The repo also includes a [Gruntfile](http://gruntjs.com/) for watching/compiling Sass and running JSHint.

To run the chat start by installing the required packages.

##### In WebChat/app
Run the following commands to install the Node and Bower packages:
    
    npm install
    bower install

##### In WebChat/server
Run `npm install` to install the Node packages.

Finally, run `node server` from WebChat/server and the app should be available at [localhost:3700](http://localhost:3700).

## Adding Users
Currently users are identified by IP. You can identify users by adding them to the `users` array in `server.js`.

## Changelog
#### Varsion 0.1.1
* Client-side now uses Backbone for views (all one of them).
* Server is now more modular, which should make future improvements easier.
* Lots of small improvements including...
  * Image and URL replacement works better
  * Chat actually scrolls to the bottom when images are inserted
  * Chat area is bigger
  * Sass! Modular CSS but also theming is now a lot easier

#### Version 0.1.0
* We're just going to pretend this is the first version.
* Basic chat functionality setup.
* Added user list.
* Added desktop notifications (these need a lot of work).
* Added user typing notifications.

## TODO
#### Near Future
* ~~Modularize the server, especially the socket.io portion.~~
* ~~Setup Backbone on the client-side to support views and routing.~~
* Move users and logging to MongoDB.
* Add support for multiple 'rooms', private messaging.
* Add active/idle/probably offline status icons.


#### The distant future, the year 2000
* Setup server to route to organization subdomains.
* Setup organization, user, and guest registration.
* Create admin/settings area.

## License

    Copyright (c) 2014 Derek Wheelden

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.