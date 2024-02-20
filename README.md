![Example figure](https://raw.githubusercontent.com/ricktu288/ray-optics/master/img/1.svg "Example figure")
<!-- ![Example figure](https://raw.githubusercontent.com/ChenZhu-Xie/ray_optics__xcz/master/img/cover.png "Multiple Euclidean algorithm runs automatically in「Dewar bottle」=「pure-reflection non-absorbing notched blackbody」") -->

# Ray Optics Simulation
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.6386611.svg)](https://doi.org/10.5281/zenodo.6386611)

A web app for creating and simulating 2D geometric optical scenes. Our goal is to make it easy for students to build physical intuition by "playing around", for teachers to do dynamical demonstrations, and at the same time also include tools for more advanced usage.

## Features
- Simulate various light sources: ray, parallel/divergent beam, and point source
- Simulate reflection in linear or curved mirrors, which can be defined by a custom equation
- Simulate beam splitters and dichroic mirrors
- Simulate refraction in linear or curved interfaces, which can be defined by a custom equation
- Simulate ideal lens/mirror, which obey the lens/mirror equation
- Simulate spherical lens defined by front/back focal distances
- Simulate gradient-index material defined by a custom refractive index function
- Simulate mixture of colors, color filtering, and chromatic dispersion
- View extensions of rays to see if they converge to a virtual image
- View real images, virtual images, and virtual objects directly
- View images that can be observed from some given position
- Distance, angular, energy flow, and momentum flow measurements
- Draw irradiance map and export as CSV data
- Export as SVG diagram

## Links
- [**Launch the Web App**](https://phydemo.app/ray-optics/simulator/)
- [Gallery](https://phydemo.app/ray-optics/gallery/)
- [Documentation](https://github.com/ricktu288/ray-optics/wiki)
- [About](https://phydemo.app/ray-optics/about)

# Related contents
* This simulator 👉 [2D ray-optics simulation](https://github.com/ChenZhu-Xie/ray-optics)
    1. Utilized by dive ⊶ 👉 [instance of the 2nd book:『ray optics』runs in an『integrating sphere』](https://github.com/ChenZhu-Xie/geometric_optics_2_discrete_mathematics)
    <!-- 2. Utilized by .ppt ⊶ 👉 [Ray & Wave Optics simulation](https://github.com/ChenZhu-Xie/ray_optics__xcz/master/A_guided_tour_to_Ray_&_Wave_Optics_Simulation.pptx) -->
    2. Utilized by .ppt ⊶ 👉[「A_guided_tour_to_Ray_&_Wave_Optics_Simulation.pptx」](https://github.com/ChenZhu-Xie/ray_optics__xcz/raw/master/A_guided_tour_to_Ray_&_Wave_Optics_Simulation.pptx)
        <!-- * ![fig](https://github.com/ChenZhu-Xie/ray_optics__xcz/raw/master/img/wave_optics.png "Wave Optics in PDEs") -->
        * ![fig](https://github.com/ChenZhu-Xie/ray_optics__xcz/raw/master/img/vector_linear_crystal_optics_1.png "Wave Optics in PDEs")
        * Links to model ✉ 👉 [NLAST-vector model (Private)](https://github.com/ChenZhu-Xie/NLAST_private)
            * Contains paper ⊋ 👉 [Berry-Mcleod paper (Private)](https://github.com/ChenZhu-Xie/Berry_Mcleod_paper__private)
            * 『Wave Optics』in『Partial Differential Equations (PDEs)』
* 中文「自述文档」㊥ 👉 [2D 射線追蹤 幾何程式（Fork 自 凃懿庭）](https://gitee.com/ChenZhu-Xie/ray_optics__xcz)

# Contributing

Contributions are welcome. Possible contributions include but not limited to the followings:

- New tools
- New items in the gallery
- New translations

For contribution guidelines, see [CONTRIBUTING.md](https://github.com/ricktu288/ray-optics/blob/master/CONTRIBUTING.md).

# Cite this project

APA:
```
Tu, Y.-T. (2016). Ray Optics Simulation [Computer software]. https://doi.org/10.5281/zenodo.6386611
```
BibTeX:
```
@software{Tu_Ray_Optics_Simulation_2016,
  author = {Tu, Yi-Ting},
  doi = {10.5281/zenodo.6386611},
  month = {2},
  title = {{Ray Optics Simulation}},
  url = {https://phydemo.app/ray-optics/},
  year = {2016}
}
```

# License
Copyright 2016–2023 Yi-Ting Tu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Third-Party Software

Ray Optics Simulation includes or depends upon the following third-party software, either in whole or in part. Each third-party software package is provided under its own license.

### FileSaver.js

FileSaver.js is distributed under the [MIT license](https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md).
The source code is available at: https://github.com/eligrey/FileSaver.js

### canvas2svg

canvas2svg is distributed under the [MIT license](https://github.com/gliffy/canvas2svg/blob/master/LICENSE).
The source code is available at: https://github.com/gliffy/canvas2svg

### Bootstrap

Bootstrap is distributed under the [MIT license](https://raw.githubusercontent.com/twbs/bootstrap/master/LICENSE).
The source code is available at: https://github.com/twbs/bootstrap

### jQuery

jQuery is distributed under the [MIT license](https://github.com/jquery/jquery/blob/master/LICENSE.txt).
The source code is available at: https://github.com/jquery/jquery

### MathQuill

MathQuill is distributed under the [Mozilla Public License, version 2.0](https://www.mozilla.org/en-US/MPL/2.0/).
The source code is available at: https://github.com/mathquill/mathquill

### Evaluatex

Evaluatex is distributed under the [MIT license](https://opensource.org/licenses/mit-license.php).
The source code is available at: https://github.com/arthanzel/evaluatex

### MathJax

MathJax is distributed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
The source code is available at: https://github.com/mathjax/MathJax-src

### json-url

json-url is distributed under the [MIT license](https://opensource.org/licenses/mit-license.php).
The source code is available at: https://github.com/masotime/json-url

### Math.js

Math.js is distributed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
The source code is available at: https://github.com/josdejong/mathjs

### TeX Math Parser
TeX Math Parser is distributed under the [MIT license](https://opensource.org/licenses/mit-license.php).
The source code is available at: https://github.com/davidtranhq/tex-math-parser


