A Brief Introduction
======================

This is a very simple plugin for wiz (为知笔记) to preview/display notes written in rst (reStructuredText) format in a browser.

Installation
=================

1. Install Python3, along with package flask, flask_cros.

#. Install `Docutils <http://docutils.sourceforge.net>`_, and make sure its tools, especially ``rst2html.py``, could be found through ``PATH``.

#. Go to the Plugins directory of wiz (can be found in 选项 - 数据存储 tab), make a new directory called ``previewRst``.

#. Clone this repository to your hard disk, and copy all the files to the ``previewRst`` directory.

#. (Optional) Clone the repository `Rykka/rhythm.css <https://github.com/Rykka/rhythm.css>`_ to the ``previewRst`` direcotry. This will set the style sheet for the preview of the rst file.

#. Restart your wiz.

Usage
=========

1. Run ``previewRst/previewRstService.py`` in the command line.

#. In each note of wiz, you will find a button ``Preview Rst`` (预览rst) in the >> section in the toolbar, which is in the title line. Press that button, and a browser will start with the content of that note displayed according to the rst format.

#. Css could also be altered by changing line 24 in ``previewRstService.py``.

How it works
=============

The method is quite simple: convert a rst file to a html file, and display the html file in a browser.

Each note is displayed in a inner browser of wiz (with Chrome kernel), and plugins are just javascripts run in the inner browser. With strict restrictions in such an environment and there have been so many existing Python tools for rst files (and I am not able to develop a conversion tool in js XD), I just apply a B/S strategy to work around. As is revealed by the name, ``previewRstService.py`` is the service. It receives the content of the active note provided by the wiz plugin written in javascript, call ``rst2html.py`` to convert it, and then run a browser to preview the converted file.

Todo
=====

1. Sometimes the Chinese characters "来源" automatically added by wiz would get garbled in browser, while other Chinese characters are displayed very well.

#. Maybe it is better to preview the rst file in the inner browser of wiz, other than in the standalone "huge" browser like Chrome, Firefox, and IE. 

#. To run a Python server in the back is quite annoying. Is there any simple way?

#. In this way, we can also convert the notes written in other structured format to html and preview them in browser!

Acknowledgement
==================

1. Python3 package flask, flask_cros.

#. `Docutils <http://docutils.sourceforge.net>`_.

#. `Rykka/rhythm.css <https://github.com/Rykka/rhythm.css>`_.

