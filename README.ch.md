<!-- ![Example figure](https://raw.githubusercontent.com/ricktu288/ray-optics/master/img/1.svg "Example figure") -->
![fig](https://gitee.com/ChenZhu-Xie/ray_optics__xcz/raw/master/img/1.svg "Example figure")
<!-- ![Example figure](https://raw.githubusercontent.com/ChenZhu-Xie/ray_optics__xcz/master/img/cover.png "多重·辗转相除法 自动运行在「杜瓦瓶」=「纯反射∧无吸收の含缺口の黑体」内")  -->
<!-- ![fig](https://gitee.com/ChenZhu-Xie/ray_optics__xcz/raw/master/img/cover.png "多重·辗转相除法 自动运行在「杜瓦瓶」=「纯反射∧无吸收の含缺口の黑体」内") -->


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

# 相关内容
* 该模拟器 👉 [2D 射線追蹤 模拟](https://gitee.com/ChenZhu-Xie/ray_optics__xcz)
    1. 被探索过程使用 ⊶ 👉 [第二本书 の 实例：运行在『积分球』中的『几何光学』](https://gitee.com/ChenZhu-Xie/geometric_optics_2_discrete_mathematics)
        * 属于生涯 ⊊ 👉 [博士 活动](https://gitee.com/ChenZhu-Xie/PhD_activities)
    2. 被演讲幻灯片使用 ⊶ 👉[「A_guided_tour_to_Ray_&_Wave_Optics_Simulation.pptx」](https://gitee.com/ChenZhu-Xie/ray_optics__xcz/raw/master/CSOE/A_guided_tour_to_Ray_&_Wave_Optics_Simulation.pptx)
        <!-- * ![fig](https://gitee.com/ChenZhu-Xie/ray_optics__xcz/raw/master/img/wave_optics.png "波动光学 in 偏微分方程") -->
        * ![fig](https://gitee.com/ChenZhu-Xie/ray_optics__xcz/raw/master/img/vector_linear_crystal_optics_1.png "波动光学 in 偏微分方程")
        * 链接到模型 ✉ 👉 [NLAST-vector 模型 (私有)](https://gitee.com/ChenZhu-Xie/NLAST_private)
            * 包含文章 ⊋ 👉 [Berry-Mcleod 文章 (私有)](https://gitee.com/ChenZhu-Xie/Berry_Mcleod_paper__private)
            * 『波动光学』in『偏微分方程 (PDEs)』
        * 属于生涯 ⊊ 👉 [博士 活动](https://gitee.com/ChenZhu-Xie/PhD_activities)
* English「README」ⓔ 👉 [2D ray-optics simulation](https://github.com/ChenZhu-Xie/ray_optics__xcz)

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


