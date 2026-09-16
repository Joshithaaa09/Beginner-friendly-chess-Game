# JavaScript Chess Game

A browser-based chess game built using HTML, CSS, and JavaScript. The project provides an interactive chessboard where two players can play a complete game with legal move validation and several standard chess rules.

## Overview

This project implements a functional chess game with an interactive board and turn-based gameplay.

The chessboard is created using HTML elements, styled using CSS, and controlled using JavaScript. jQuery is used for handling board interactions and DOM manipulation.

The project maintains the state of every chess piece, validates legal moves, handles captures, and manages the game state throughout the match.

## Features

- Interactive 8x8 chessboard
- Two-player local gameplay
- White and Black turns
- Legal movement for all chess pieces
- Pawn movement and captures
- Knight movement
- Bishop movement
- Rook movement
- Queen movement
- King movement
- Piece capturing
- Check detection
- Checkmate detection
- Stalemate detection
- Castling
- En passant
- Pawn promotion
- King safety validation
- Legal move highlighting
- Check position highlighting
- Undo functionality
- Reset game functionality
- Threefold repetition detection
- Fifty-move rule detection
- Insufficient material detection

The JavaScript maintains separate state information for the current turn, selected piece, highlighted squares, move history, position history, and game status. :contentReference[oaicite:2]{index=2}

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery

## Project Structure

```text
JavaScript-Chess-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
