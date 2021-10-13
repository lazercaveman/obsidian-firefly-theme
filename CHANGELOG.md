# Changelog
All notable changes to this project will be documented in this file.

## [1.0.5] - 23.09.2021
### Added
- Added table styling
- Added responsive iframes:
  - iframes will take a 100% of the documents width
  - iframes will provide a 16:9 ration
### Fixed
- Adjusted title colors (since I've been asked if I can go back to the previous state where the title types had different colors)
- List Items now have same font-size as like other text
- List Items strong content gets highlighted the same style as like other text
- Tables strong content gets highlighted the same style as like other text
- Menu buttons get highlighted now, when active

## [1.0.4] - 17.09.2021
### Added
- "Code-Style-Tags" can be used within double tripple backtigs (which are usually used to mark code-blocks) - instead of adding a programminglanguage one can add "Code-Style-Tags", which will trigger specific styles e.g. to make special notes, etc.
- Using the **Code-Style-Tag of _notes** tag will provide a note box with drop shadow (preview mode), in which notes will be marked as such and highlighted.
### Changed
- Adjusted preview-texts line-height from default to 1.75rem.
- Adjusted preview-texts font-size from 1.25rem to 1.15rem
- Slightly adjusted headline-colors
### Fixed
- Scss map items of font.size.large and font.size.xtra-large had the same value, which is fixed now.

## [1.0.3] - 15.09.2021
### Added
- Styling for inline-code-blocks
- Styling for HTML-Code within editor mode
- Customized styling of right sidebar and related content
### Changed
- Updated Colors of h1 and h2 to be more consistent according to colors of other headlines
- Updated Colors of anker Tags to be more visible
- Updated Colors of hash-tags to be more visible 
- Adjusted positioning and dimendions of nav-header and contained items
- Adjusted UI colors and border-colors
### Fixed
- Nav-Header items where visualized as active, when they wherent.

## [1.0.2] - 14.09.2021
### Fixed
- Fixed Error with Code-Blocks background color, where code-lines overlap each other
### Changed
- Updated Colors
- Updated Font-Sizes
- Adjusted margin of some elements
- Updated installation instructions within README.md

## [1.0.1] - 11.09.2021
### Added
- Added initial styling for obsidian settings

## [1.0.0] - 10.09.2021
### Added
- Screenshot for preview
- Readme with description, credits, and so on
- Basic Scss architecture for managing theme styling
- initialized repo
