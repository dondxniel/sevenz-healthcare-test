# sevenz-healthcare-test

To run the project, run the below git command to clone:

```
git clone https://github.com/dondxniel/sevenz-healthcare-test.git
```
then go into the directory and installing all packages by entering 
```
cd sevenz-healthcare-test && yarn install 
```
After all packages have been successfully installed, provided you have stable internet connection, then run 
```
yarn dev
``` 
to run the project. 

## UNDERSTANDING THE PROJECT'S FOLDER STRUCTURE
The project's components system follows the atomic design structure which focuses on creating design systems, not just a bunch of pages. The folders of interest are listed below: 

* `components`
* `constants`
* `layouts`
* `lotties`
* `pages`
* `queries`

1. `components`: 
This folder contains three folders (this is because of the simplicity of the project; there are usually more). The folders are `compound`, `simple` and `skeletons`. `simple` components are the smallest unit of the component system and can't be further broken down into smaller pieces. `compound` components are a combination of `simple` components and other elements to 'spice it up.' The `skeletons` folder contains skeletons for simulating lazy loading componets. 

2. `constants`: 
This folder contains all the static data contained in the site. The purpose for this is to have a central spot for all the text in the site for easy editing. 

3. `layouts`: 
This folder was shipped with nuxt js boilerplate code. It contains the layouts to be shared by several components. 

4. `lotties`: 
This contains all lottie animation files.

5. `pages`: 
Like the `layouts` folder, this one ships with nuxtjs boilerplate too. It contains all the pages for the app. 

6. `queries`: 
Our app being that it uses graphql needs to have all it's queries in one place for better maintainability; this is the purpose of this folder. 
