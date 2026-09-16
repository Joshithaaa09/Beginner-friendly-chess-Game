/* =========================================================
   JAVASCRIPT CHESS GAME
   Complete chess logic
   Compatible with the existing index.html + style.css
   ========================================================= */

let main = {

    variables: {

        turn: 'w',

        selectedpiece: '',

        highlighted: [],

        gameOver: false,

        moveHistory: [],

        positionHistory: {},

        halfmoveClock: 0,

        lastMove: null,

        pieces: {

            /* ================= WHITE PAWNS ================= */

            w_pawn_1: {
                name: 'w_pawn_1',
                type: 'pawn',
                color: 'w',
                position: '1_2',
                moved: false,
                img: '♙'
            },

            w_pawn_2: {
                name: 'w_pawn_2',
                type: 'pawn',
                color: 'w',
                position: '2_2',
                moved: false,
                img: '♙'
            },

            w_pawn_3: {
                name: 'w_pawn_3',
                type: 'pawn',
                color: 'w',
                position: '3_2',
                moved: false,
                img: '♙'
            },

            w_pawn_4: {
                name: 'w_pawn_4',
                type: 'pawn',
                color: 'w',
                position: '4_2',
                moved: false,
                img: '♙'
            },

            w_pawn_5: {
                name: 'w_pawn_5',
                type: 'pawn',
                color: 'w',
                position: '5_2',
                moved: false,
                img: '♙'
            },

            w_pawn_6: {
                name: 'w_pawn_6',
                type: 'pawn',
                color: 'w',
                position: '6_2',
                moved: false,
                img: '♙'
            },

            w_pawn_7: {
                name: 'w_pawn_7',
                type: 'pawn',
                color: 'w',
                position: '7_2',
                moved: false,
                img: '♙'
            },

            w_pawn_8: {
                name: 'w_pawn_8',
                type: 'pawn',
                color: 'w',
                position: '8_2',
                moved: false,
                img: '♙'
            },

            /* ================= BLACK PAWNS ================= */

            b_pawn_1: {
                name: 'b_pawn_1',
                type: 'pawn',
                color: 'b',
                position: '1_7',
                moved: false,
                img: '♟'
            },

            b_pawn_2: {
                name: 'b_pawn_2',
                type: 'pawn',
                color: 'b',
                position: '2_7',
                moved: false,
                img: '♟'
            },

            b_pawn_3: {
                name: 'b_pawn_3',
                type: 'pawn',
                color: 'b',
                position: '3_7',
                moved: false,
                img: '♟'
            },

            b_pawn_4: {
                name: 'b_pawn_4',
                type: 'pawn',
                color: 'b',
                position: '4_7',
                moved: false,
                img: '♟'
            },

            b_pawn_5: {
                name: 'b_pawn_5',
                type: 'pawn',
                color: 'b',
                position: '5_7',
                moved: false,
                img: '♟'
            },

            b_pawn_6: {
                name: 'b_pawn_6',
                type: 'pawn',
                color: 'b',
                position: '6_7',
                moved: false,
                img: '♟'
            },

            b_pawn_7: {
                name: 'b_pawn_7',
                type: 'pawn',
                color: 'b',
                position: '7_7',
                moved: false,
                img: '♟'
            },

            b_pawn_8: {
                name: 'b_pawn_8',
                type: 'pawn',
                color: 'b',
                position: '8_7',
                moved: false,
                img: '♟'
            },

            /* ================= ROOKS ================= */

            w_rook_1: {
                name: 'w_rook_1',
                type: 'rook',
                color: 'w',
                position: '1_1',
                moved: false,
                img: '♖'
            },

            w_rook_2: {
                name: 'w_rook_2',
                type: 'rook',
                color: 'w',
                position: '8_1',
                moved: false,
                img: '♖'
            },

            b_rook_1: {
                name: 'b_rook_1',
                type: 'rook',
                color: 'b',
                position: '1_8',
                moved: false,
                img: '♜'
            },

            b_rook_2: {
                name: 'b_rook_2',
                type: 'rook',
                color: 'b',
                position: '8_8',
                moved: false,
                img: '♜'
            },

            /* ================= KNIGHTS ================= */

            w_knight_1: {
                name: 'w_knight_1',
                type: 'knight',
                color: 'w',
                position: '2_1',
                moved: false,
                img: '♘'
            },

            w_knight_2: {
                name: 'w_knight_2',
                type: 'knight',
                color: 'w',
                position: '7_1',
                moved: false,
                img: '♘'
            },

            b_knight_1: {
                name: 'b_knight_1',
                type: 'knight',
                color: 'b',
                position: '2_8',
                moved: false,
                img: '♞'
            },

            b_knight_2: {
                name: 'b_knight_2',
                type: 'knight',
                color: 'b',
                position: '7_8',
                moved: false,
                img: '♞'
            },

            /* ================= BISHOPS ================= */

            w_bishop_1: {
                name: 'w_bishop_1',
                type: 'bishop',
                color: 'w',
                position: '3_1',
                moved: false,
                img: '♗'
            },

            w_bishop_2: {
                name: 'w_bishop_2',
                type: 'bishop',
                color: 'w',
                position: '6_1',
                moved: false,
                img: '♗'
            },

            b_bishop_1: {
                name: 'b_bishop_1',
                type: 'bishop',
                color: 'b',
                position: '3_8',
                moved: false,
                img: '♝'
            },

            b_bishop_2: {
                name: 'b_bishop_2',
                type: 'bishop',
                color: 'b',
                position: '6_8',
                moved: false,
                img: '♝'
            },

            /* ================= QUEENS ================= */

            w_queen: {
                name: 'w_queen',
                type: 'queen',
                color: 'w',
                position: '4_1',
                moved: false,
                img: '♕'
            },

            b_queen: {
                name: 'b_queen',
                type: 'queen',
                color: 'b',
                position: '4_8',
                moved: false,
                img: '♛'
            },

            /* ================= KINGS ================= */

            w_king: {
                name: 'w_king',
                type: 'king',
                color: 'w',
                position: '5_1',
                moved: false,
                img: '♔'
            },

            b_king: {
                name: 'b_king',
                type: 'king',
                color: 'b',
                position: '5_8',
                moved: false,
                img: '♚'
            }
        }
    },

    methods: {

        /* =====================================================
           BOARD / POSITION HELPERS
           ===================================================== */

        coordinates: function (position) {

            let parts = position.split('_');

            return {
                x: parseInt(parts[0]),
                y: parseInt(parts[1])
            };
        },

        getPosition: function (x, y) {

            if (
                x < 1 ||
                x > 8 ||
                y < 1 ||
                y > 8
            ) {
                return null;
            }

            return x + '_' + y;
        },

        isInsideBoard: function (x, y) {

            return (
                x >= 1 &&
                x <= 8 &&
                y >= 1 &&
                y <= 8
            );
        },

        getPieceAt: function (position) {

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.position === position
                ) {
                    return piece;
                }
            }

            return null;
        },

        getKing: function (color) {

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.type === 'king' &&
                    piece.color === color &&
                    piece.position !== null
                ) {
                    return piece;
                }
            }

            return null;
        },

        /* =====================================================
           GAME SETUP
           ===================================================== */

        gamesetup: function () {

            $('.gamecell').empty();

            main.variables.turn = 'w';
            main.variables.selectedpiece = '';
            main.variables.highlighted = [];
            main.variables.gameOver = false;
            main.variables.moveHistory = [];
            main.variables.positionHistory = {};
            main.variables.halfmoveClock = 0;
            main.variables.lastMove = null;

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                piece.moved = false;

                if (piece.name.startsWith('w_pawn')) {

                    let number =
                        parseInt(
                            piece.name.split('_')[2]
                        );

                    piece.position =
                        number + '_2';

                    piece.type = 'pawn';
                    piece.img = '♙';
                }

                else if (
                    piece.name.startsWith('b_pawn')
                ) {

                    let number =
                        parseInt(
                            piece.name.split('_')[2]
                        );

                    piece.position =
                        number + '_7';

                    piece.type = 'pawn';
                    piece.img = '♟';
                }

                else if (piece.name === 'w_rook_1') {
                    piece.position = '1_1';
                    piece.type = 'rook';
                    piece.img = '♖';
                }

                else if (piece.name === 'w_rook_2') {
                    piece.position = '8_1';
                    piece.type = 'rook';
                    piece.img = '♖';
                }

                else if (piece.name === 'b_rook_1') {
                    piece.position = '1_8';
                    piece.type = 'rook';
                    piece.img = '♜';
                }

                else if (piece.name === 'b_rook_2') {
                    piece.position = '8_8';
                    piece.type = 'rook';
                    piece.img = '♜';
                }

                else if (piece.name === 'w_knight_1') {
                    piece.position = '2_1';
                    piece.type = 'knight';
                    piece.img = '♘';
                }

                else if (piece.name === 'w_knight_2') {
                    piece.position = '7_1';
                    piece.type = 'knight';
                    piece.img = '♘';
                }

                else if (piece.name === 'b_knight_1') {
                    piece.position = '2_8';
                    piece.type = 'knight';
                    piece.img = '♞';
                }

                else if (piece.name === 'b_knight_2') {
                    piece.position = '7_8';
                    piece.type = 'knight';
                    piece.img = '♞';
                }

                else if (piece.name === 'w_bishop_1') {
                    piece.position = '3_1';
                    piece.type = 'bishop';
                    piece.img = '♗';
                }

                else if (piece.name === 'w_bishop_2') {
                    piece.position = '6_1';
                    piece.type = 'bishop';
                    piece.img = '♗';
                }

                else if (piece.name === 'b_bishop_1') {
                    piece.position = '3_8';
                    piece.type = 'bishop';
                    piece.img = '♝';
                }

                else if (piece.name === 'b_bishop_2') {
                    piece.position = '6_8';
                    piece.type = 'bishop';
                    piece.img = '♝';
                }

                else if (piece.name === 'w_queen') {
                    piece.position = '4_1';
                    piece.type = 'queen';
                    piece.img = '♕';
                }

                else if (piece.name === 'b_queen') {
                    piece.position = '4_8';
                    piece.type = 'queen';
                    piece.img = '♛';
                }

                else if (piece.name === 'w_king') {
                    piece.position = '5_1';
                    piece.type = 'king';
                    piece.img = '♔';
                }

                else if (piece.name === 'b_king') {
                    piece.position = '5_8';
                    piece.type = 'king';
                    piece.img = '♚';
                }

                $('#' + piece.position).html(
                    '<span class="piece ' +
                    piece.color +
                    '" id="' +
                    piece.name +
                    '">' +
                    piece.img +
                    '</span>'
                );
            }

            main.variables.positionHistory[
                main.methods.getPositionKey()
            ] = 1;

            $('#turn').text(
                "It's Whites Turn!"
            );

            main.methods.bindEvents();
        },

        /* =====================================================
           SLIDING PIECES
           ===================================================== */

        addSlidingMoves: function (
            piece,
            directions
        ) {

            let moves = [];

            let current =
                this.coordinates(
                    piece.position
                );

            for (
                let direction of directions
            ) {

                let x =
                    current.x +
                    direction[0];

                let y =
                    current.y +
                    direction[1];

                while (
                    this.isInsideBoard(x, y)
                ) {

                    let position =
                        this.getPosition(x, y);

                    let target =
                        this.getPieceAt(position);

                    if (!target) {

                        moves.push(position);
                    }

                    else {

                        if (
                            target.color !==
                            piece.color
                        ) {

                            moves.push(position);
                        }

                        break;
                    }

                    x += direction[0];
                    y += direction[1];
                }
            }

            return moves;
        },

        /* =====================================================
           PAWN ATTACKS
           ===================================================== */

        pawnAttacks: function (piece) {

            let result = [];

            let current =
                this.coordinates(
                    piece.position
                );

            let direction =
                piece.color === 'w'
                    ? 1
                    : -1;

            let positions = [

                [
                    current.x - 1,
                    current.y + direction
                ],

                [
                    current.x + 1,
                    current.y + direction
                ]
            ];

            for (
                let p of positions
            ) {

                if (
                    this.isInsideBoard(
                        p[0],
                        p[1]
                    )
                ) {

                    result.push(
                        this.getPosition(
                            p[0],
                            p[1]
                        )
                    );
                }
            }

            return result;
        },

        /* =====================================================
           EN PASSANT
           ===================================================== */

        enPassantMoves: function (piece) {

            let moves = [];

            if (
                piece.type !== 'pawn' ||
                !main.variables.lastMove
            ) {
                return moves;
            }

            let last =
                main.variables.lastMove;

            if (
                last.pieceType !== 'pawn' ||
                !last.from ||
                !last.to
            ) {
                return moves;
            }

            let from =
                this.coordinates(last.from);

            let to =
                this.coordinates(last.to);

            let current =
                this.coordinates(
                    piece.position
                );

            if (
                Math.abs(
                    from.y - to.y
                ) !== 2
            ) {
                return moves;
            }

            if (
                to.y !== current.y
            ) {
                return moves;
            }

            if (
                Math.abs(
                    to.x - current.x
                ) !== 1
            ) {
                return moves;
            }

            if (
                last.pieceColor ===
                piece.color
            ) {
                return moves;
            }

            let direction =
                piece.color === 'w'
                    ? 1
                    : -1;

            let destination =
                this.getPosition(
                    to.x,
                    current.y + direction
                );

            let adjacent =
                this.getPieceAt(last.to);

            if (
                adjacent &&
                adjacent.type === 'pawn' &&
                adjacent.color !== piece.color
            ) {

                moves.push(destination);
            }

            return moves;
        },

        /* =====================================================
           PSEUDO LEGAL MOVES
           ===================================================== */

        pseudoMoves: function (
            pieceName,
            attackOnly = false
        ) {

            let piece =
                main.variables.pieces[
                    pieceName
                ];

            if (
                !piece ||
                piece.position === null
            ) {
                return [];
            }

            let current =
                this.coordinates(
                    piece.position
                );

            let moves = [];

            /* ================= PAWN ================= */

            if (
                piece.type === 'pawn'
            ) {

                let direction =
                    piece.color === 'w'
                        ? 1
                        : -1;

                if (attackOnly) {

                    return this.pawnAttacks(
                        piece
                    );
                }

                let one =
                    this.getPosition(
                        current.x,
                        current.y + direction
                    );

                if (
                    one &&
                    !this.getPieceAt(one)
                ) {

                    moves.push(one);

                    let startingRank =
                        piece.color === 'w'
                            ? 2
                            : 7;

                    let two =
                        this.getPosition(
                            current.x,
                            current.y +
                            direction * 2
                        );

                    if (
                        current.y ===
                        startingRank &&
                        !piece.moved &&
                        two &&
                        !this.getPieceAt(two)
                    ) {

                        moves.push(two);
                    }
                }

                let attacks =
                    this.pawnAttacks(piece);

                for (
                    let square of attacks
                ) {

                    let target =
                        this.getPieceAt(
                            square
                        );

                    if (
                        target &&
                        target.color !==
                        piece.color
                    ) {

                        moves.push(square);
                    }
                }

                moves =
                    moves.concat(
                        this.enPassantMoves(
                            piece
                        )
                    );

                return [
                    ...new Set(moves)
                ];
            }

            /* ================= KNIGHT ================= */

            if (
                piece.type === 'knight'
            ) {

                let jumps = [

                    [1, 2],
                    [2, 1],
                    [2, -1],
                    [1, -2],
                    [-1, -2],
                    [-2, -1],
                    [-2, 1],
                    [-1, 2]

                ];

                for (
                    let jump of jumps
                ) {

                    let x =
                        current.x +
                        jump[0];

                    let y =
                        current.y +
                        jump[1];

                    if (
                        !this.isInsideBoard(
                            x,
                            y
                        )
                    ) {
                        continue;
                    }

                    let position =
                        this.getPosition(
                            x,
                            y
                        );

                    let target =
                        this.getPieceAt(
                            position
                        );

                    if (
                        attackOnly ||
                        !target ||
                        target.color !==
                        piece.color
                    ) {

                        moves.push(
                            position
                        );
                    }
                }

                return moves;
            }

            /* ================= BISHOP ================= */

            if (
                piece.type === 'bishop'
            ) {

                return this.addSlidingMoves(
                    piece,
                    [
                        [1, 1],
                        [1, -1],
                        [-1, 1],
                        [-1, -1]
                    ]
                );
            }

            /* ================= ROOK ================= */

            if (
                piece.type === 'rook'
            ) {

                return this.addSlidingMoves(
                    piece,
                    [
                        [1, 0],
                        [-1, 0],
                        [0, 1],
                        [0, -1]
                    ]
                );
            }

            /* ================= QUEEN ================= */

            if (
                piece.type === 'queen'
            ) {

                return this.addSlidingMoves(
                    piece,
                    [
                        [1, 1],
                        [1, -1],
                        [-1, 1],
                        [-1, -1],
                        [1, 0],
                        [-1, 0],
                        [0, 1],
                        [0, -1]
                    ]
                );
            }

            /* ================= KING ================= */

            if (
                piece.type === 'king'
            ) {

                let directions = [

                    [1, 1],
                    [1, 0],
                    [1, -1],
                    [0, 1],
                    [0, -1],
                    [-1, 1],
                    [-1, 0],
                    [-1, -1]

                ];

                for (
                    let direction of directions
                ) {

                    let x =
                        current.x +
                        direction[0];

                    let y =
                        current.y +
                        direction[1];

                    if (
                        !this.isInsideBoard(
                            x,
                            y
                        )
                    ) {
                        continue;
                    }

                    let position =
                        this.getPosition(
                            x,
                            y
                        );

                    let target =
                        this.getPieceAt(
                            position
                        );

                    if (
                        attackOnly ||
                        !target ||
                        target.color !==
                        piece.color
                    ) {

                        moves.push(
                            position
                        );
                    }
                }

                return moves;
            }

            return moves;
        },

        /* =====================================================
           SQUARE ATTACK DETECTION
           ===================================================== */

        isSquareAttacked: function (
            position,
            byColor
        ) {

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.position === null ||
                    piece.color !== byColor
                ) {
                    continue;
                }

                if (
                    piece.type === 'pawn'
                ) {

                    let attacks =
                        this.pawnAttacks(
                            piece
                        );

                    if (
                        attacks.includes(
                            position
                        )
                    ) {
                        return true;
                    }

                    continue;
                }

                let moves =
                    this.pseudoMoves(
                        name,
                        true
                    );

                if (
                    moves.includes(position)
                ) {

                    return true;
                }
            }

            return false;
        },

        /* =====================================================
           CHECK
           ===================================================== */

        isInCheck: function (color) {

            let king =
                this.getKing(color);

            if (!king) {
                return true;
            }

            let opponent =
                color === 'w'
                    ? 'b'
                    : 'w';

            return this.isSquareAttacked(
                king.position,
                opponent
            );
        },

        /* =====================================================
           CASTLING
           ===================================================== */

        castlingMoves: function (king) {

            let moves = [];

            if (
                king.type !== 'king' ||
                king.moved ||
                this.isInCheck(
                    king.color
                )
            ) {
                return moves;
            }

            let y =
                king.color === 'w'
                    ? 1
                    : 8;

            let opponent =
                king.color === 'w'
                    ? 'b'
                    : 'w';

            /* ================= KINGSIDE ================= */

            let rookKing =
                this.getPieceAt(
                    '8_' + y
                );

            if (
                rookKing &&
                rookKing.type === 'rook' &&
                rookKing.color === king.color &&
                !rookKing.moved &&
                !this.getPieceAt('6_' + y) &&
                !this.getPieceAt('7_' + y)
            ) {

                if (
                    !this.isSquareAttacked(
                        '6_' + y,
                        opponent
                    ) &&
                    !this.isSquareAttacked(
                        '7_' + y,
                        opponent
                    )
                ) {

                    moves.push(
                        '7_' + y
                    );
                }
            }

            /* ================= QUEENSIDE ================= */

            let rookQueen =
                this.getPieceAt(
                    '1_' + y
                );

            if (
                rookQueen &&
                rookQueen.type === 'rook' &&
                rookQueen.color === king.color &&
                !rookQueen.moved &&
                !this.getPieceAt('2_' + y) &&
                !this.getPieceAt('3_' + y) &&
                !this.getPieceAt('4_' + y)
            ) {

                if (
                    !this.isSquareAttacked(
                        '4_' + y,
                        opponent
                    ) &&
                    !this.isSquareAttacked(
                        '3_' + y,
                        opponent
                    )
                ) {

                    moves.push(
                        '3_' + y
                    );
                }
            }

            return moves;
        },

        /* =====================================================
           LEGAL MOVE TEST
           ===================================================== */

        testMove: function (
            pieceName,
            destination
        ) {

            let piece =
                main.variables.pieces[
                    pieceName
                ];

            if (
                !piece ||
                piece.position === null
            ) {
                return false;
            }

            let from =
                piece.position;

            let captured =
                this.getPieceAt(
                    destination
                );

            if (
                captured &&
                captured.color ===
                piece.color
            ) {
                return false;
            }

            let capturedPosition = null;

            /* Normal capture */

            if (captured) {

                capturedPosition =
                    captured.position;

                captured.position = null;
            }

            /* En passant capture */

            let enPassantCaptured =
                null;

            if (
                piece.type === 'pawn' &&
                !captured &&
                this.enPassantMoves(
                    piece
                ).includes(destination)
            ) {

                let d =
                    this.coordinates(
                        destination
                    );

                let capturedPositionEP =
                    this.getPosition(
                        d.x,
                        d.y -
                        (
                            piece.color === 'w'
                                ? 1
                                : -1
                        )
                    );

                enPassantCaptured =
                    this.getPieceAt(
                        capturedPositionEP
                    );

                if (
                    enPassantCaptured
                ) {

                    enPassantCaptured.position =
                        null;
                }
            }

            piece.position =
                destination;

            let legal =
                !this.isInCheck(
                    piece.color
                );

            /* Restore */

            piece.position = from;

            if (captured) {
                captured.position =
                    capturedPosition;
            }

            if (enPassantCaptured) {

                let d =
                    this.coordinates(
                        destination
                    );

                enPassantCaptured.position =
                    this.getPosition(
                        d.x,
                        d.y -
                        (
                            piece.color === 'w'
                                ? 1
                                : -1
                        )
                    );
            }

            return legal;
        },

        /* =====================================================
           LEGAL OPTIONS
           ===================================================== */

        options: function (
            pieceName
        ) {

            let piece =
                main.variables.pieces[
                    pieceName
                ];

            if (
                !piece ||
                piece.position === null ||
                piece.color !==
                main.variables.turn
            ) {

                return [];
            }

            let moves =
                this.pseudoMoves(
                    pieceName
                );

            if (
                piece.type === 'king'
            ) {

                moves =
                    moves.concat(
                        this.castlingMoves(
                            piece
                        )
                    );
            }

            let legalMoves = [];

            for (
                let destination of moves
            ) {

                if (
                    this.testMove(
                        pieceName,
                        destination
                    )
                ) {

                    legalMoves.push(
                        destination
                    );
                }
            }

            return [
                ...new Set(legalMoves)
            ];
        },

        moveoptions: function (
            pieceName
        ) {

            return this.options(
                pieceName
            );
        },

        w_options: function () {

            let result = {};

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.color === 'w' &&
                    piece.position !== null
                ) {

                    result[name] =
                        this.options(name);
                }
            }

            return result;
        },

        b_options: function () {

            let result = {};

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.color === 'b' &&
                    piece.position !== null
                ) {

                    result[name] =
                        this.options(name);
                }
            }

            return result;
        },

        /* =====================================================
           CAPTURE
           ===================================================== */

        capture: function (
            pieceName,
            destination
        ) {

            let target =
                this.getPieceAt(
                    destination
                );

            if (
                !target ||
                target.color ===
                main.variables.pieces[
                    pieceName
                ].color
            ) {
                return null;
            }

            target.position = null;

            $('#' + target.name).remove();

            return target;
        },

        /* =====================================================
           EN PASSANT CAPTURE
           ===================================================== */

        performEnPassantCapture: function (
            piece,
            destination
        ) {

            if (
                piece.type !== 'pawn'
            ) {
                return null;
            }

            if (
                !this.enPassantMoves(
                    piece
                ).includes(destination)
            ) {
                return null;
            }

            let d =
                this.coordinates(
                    destination
                );

            let capturedPosition =
                this.getPosition(
                    d.x,
                    d.y -
                    (
                        piece.color === 'w'
                            ? 1
                            : -1
                    )
                );

            let captured =
                this.getPieceAt(
                    capturedPosition
                );

            if (
                captured &&
                captured.type === 'pawn' &&
                captured.color !==
                piece.color
            ) {

                captured.position =
                    null;

                $('#' + captured.name)
                    .remove();

                return captured;
            }

            return null;
        },

        /* =====================================================
           MOVE
           ===================================================== */

       move: function (pieceName, destination) {

    if (main.variables.gameOver) {
        return false;
    }

    let piece = main.variables.pieces[pieceName];

    if (!piece || piece.position === null) {
        return false;
    }

    if (piece.color !== main.variables.turn) {
        return false;
    }

    // Check that destination is actually legal
    let legalMoves = this.options(pieceName);

    if (!legalMoves.includes(destination)) {
        return false;
    }

    let from = piece.position;

    let fromCoordinates = this.coordinates(from);
    let destinationCoordinates = this.coordinates(destination);

    let target = this.getPieceAt(destination);

    let isCapture = !!target;

    let isEnPassant =
        piece.type === 'pawn' &&
        !target &&
        this.enPassantMoves(piece).includes(destination);

    let isCastling =
        piece.type === 'king' &&
        Math.abs(
            destinationCoordinates.x - fromCoordinates.x
        ) === 2;

    /*
     * Save state for undo
     */
    let snapshot = this.createSnapshot();

    main.variables.moveHistory.push(snapshot);

    /*
     * Capture opponent piece
     */
    if (target && target.color !== piece.color) {
        target.position = null;

        $('#' + target.name).remove();
    }

    /*
     * En passant
     */
    if (isEnPassant) {
        this.performEnPassantCapture(
            piece,
            destination
        );

        isCapture = true;
    }

    /*
     * Get the actual DOM element
     * BEFORE changing the board.
     */
    let pieceElement = document.getElementById(
        piece.name
    );

    /*
     * Remove piece from old square.
     */
    $('#' + from).empty();

    /*
     * Remove anything remaining on destination.
     */
    $('#' + destination).empty();

    /*
     * Put the SAME piece element
     * on the new square.
     */
    if (pieceElement) {
        document
            .getElementById(destination)
            .appendChild(pieceElement);
    }

    /*
     * Update piece position.
     */
    piece.position = destination;
    piece.moved = true;

    /*
     * Castling
     */
    if (isCastling) {

        let y = piece.color === 'w' ? 1 : 8;

        /*
         * Kingside castle
         */
        if (
            destinationCoordinates.x >
            fromCoordinates.x
        ) {

            let rook =
                this.getPieceAt('8_' + y);

            if (rook) {

                let rookElement =
                    document.getElementById(
                        rook.name
                    );

                $('#' + rook.position).empty();

                rook.position = '6_' + y;
                rook.moved = true;

                if (rookElement) {
                    document
                        .getElementById(
                            rook.position
                        )
                        .appendChild(
                            rookElement
                        );
                }
            }
        }

        /*
         * Queenside castle
         */
        else {

            let rook =
                this.getPieceAt('1_' + y);

            if (rook) {

                let rookElement =
                    document.getElementById(
                        rook.name
                    );

                $('#' + rook.position).empty();

                rook.position = '4_' + y;
                rook.moved = true;

                if (rookElement) {
                    document
                        .getElementById(
                            rook.position
                        )
                        .appendChild(
                            rookElement
                        );
                }
            }
        }
    }

    /*
     * Half-move clock
     */
    if (
        piece.type === 'pawn' ||
        isCapture
    ) {
        main.variables.halfmoveClock = 0;
    } else {
        main.variables.halfmoveClock++;
    }

    /*
     * Save last move
     */
    main.variables.lastMove = {

        pieceName: piece.name,

        pieceType: piece.type,

        pieceColor: piece.color,

        from: from,

        to: destination
    };

    /*
     * Pawn promotion
     */
    if (piece.type === 'pawn') {

        let y = destinationCoordinates.y;

        if (
            (piece.color === 'w' && y === 8) ||
            (piece.color === 'b' && y === 1)
        ) {

            this.promote(pieceName);
        }
    }

    return true;
},

        /* =====================================================
           PROMOTION
           ===================================================== */

        promote: function (
            pieceName
        ) {

            let piece =
                main.variables.pieces[
                    pieceName
                ];

            if (
                !piece ||
                piece.type !== 'pawn'
            ) {
                return;
            }

            let choice =
                window.prompt(
                    'Promote pawn to:\n\nQ = Queen\nR = Rook\nB = Bishop\nN = Knight',
                    'Q'
                );

            if (!choice) {
                choice = 'Q';
            }

            choice =
                choice
                    .trim()
                    .toUpperCase();

            if (
                ![
                    'Q',
                    'R',
                    'B',
                    'N'
                ].includes(choice)
            ) {

                choice = 'Q';
            }

            let promotion = {

                Q: {
                    type: 'queen',
                    w: '♕',
                    b: '♛'
                },

                R: {
                    type: 'rook',
                    w: '♖',
                    b: '♜'
                },

                B: {
                    type: 'bishop',
                    w: '♗',
                    b: '♝'
                },

                N: {
                    type: 'knight',
                    w: '♘',
                    b: '♞'
                }
            };

            piece.type =
                promotion[choice].type;

            piece.img =
                promotion[choice][
                    piece.color
                ];

            $('#' + piece.name).text(
                piece.img
            );
        },

        /* =====================================================
           SELECTION / HIGHLIGHT
           ===================================================== */

        togglehighlight: function () {

            $('.gamecell')
                .removeClass(
                    'green'
                );

            $('.gamecell')
                .removeClass(
                    'check-square'
                );

            main.variables.highlighted =
                [];
        },

        highlight: function (
            moves
        ) {

            this.togglehighlight();

            for (
                let position of moves
            ) {

                $('#' + position)
                    .addClass(
                        'green'
                    );
            }

            main.variables.highlighted =
                moves;
        },

        selectPiece: function (
            pieceName
        ) {

            if (
                main.variables.gameOver
            ) {
                return;
            }

            let piece =
                main.variables.pieces[
                    pieceName
                ];

            if (!piece) {
                return;
            }

            if (
                piece.color !==
                main.variables.turn
            ) {
                return;
            }

            let moves =
                this.options(
                    pieceName
                );

            main.variables.selectedpiece =
                pieceName;

            this.highlight(
                moves
            );
        },

        clearSelection: function () {

            main.variables.selectedpiece =
                '';

            this.togglehighlight();
        },

        /* =====================================================
           TURN
           ===================================================== */

        endturn: function () {

            this.clearSelection();

            main.variables.turn =
                main.variables.turn === 'w'
                    ? 'b'
                    : 'w';

            let key =
                this.getPositionKey();

            if (
                !main.variables.positionHistory[
                    key
                ]
            ) {

                main.variables.positionHistory[
                    key
                ] = 0;
            }

            main.variables.positionHistory[
                key
            ]++;

            this.checkGameState();
        },

        /* =====================================================
           LEGAL MOVE CHECK
           ===================================================== */

        hasLegalMoves: function (
            color
        ) {

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.color === color &&
                    piece.position !== null
                ) {

                    if (
                        this.options(name)
                            .length > 0
                    ) {

                        return true;
                    }
                }
            }

            return false;
        },

        /* =====================================================
           GAME STATE
           ===================================================== */

        checkGameState: function () {

            if (
                main.variables.gameOver
            ) {
                return;
            }

            let color =
                main.variables.turn;

            let inCheck =
                this.isInCheck(color);

            let hasMoves =
                this.hasLegalMoves(color);

            this.highlightKingInCheck();

            /* CHECKMATE */

            if (
                !hasMoves &&
                inCheck
            ) {

                main.variables.gameOver =
                    true;

                let winner =
                    color === 'w'
                        ? 'Black'
                        : 'White';

                $('#turn').text(
                    'Checkmate! ' +
                    winner +
                    ' wins!'
                );

                return 'checkmate';
            }

            /* STALEMATE */

            if (
                !hasMoves &&
                !inCheck
            ) {

                main.variables.gameOver =
                    true;

                $('#turn').text(
                    'Stalemate! Draw!'
                );

                return 'stalemate';
            }

            /* THREEFOLD REPETITION */

            let currentKey =
                this.getPositionKey();

            if (
                main.variables.positionHistory[
                    currentKey
                ] >= 3
            ) {

                main.variables.gameOver =
                    true;

                $('#turn').text(
                    'Draw by threefold repetition!'
                );

                return 'draw';
            }

            /* 50-MOVE RULE */

            if (
                main.variables.halfmoveClock >= 100
            ) {

                main.variables.gameOver =
                    true;

                $('#turn').text(
                    'Draw by 50-move rule!'
                );

                return 'draw';
            }

            /* INSUFFICIENT MATERIAL */

            if (
                this.isInsufficientMaterial()
            ) {

                main.variables.gameOver =
                    true;

                $('#turn').text(
                    'Draw by insufficient material!'
                );

                return 'draw';
            }

            /* CHECK */

            if (inCheck) {

                $('#turn').text(
                    (
                        color === 'w'
                            ? 'White'
                            : 'Black'
                    ) +
                    ' is in Check!'
                );

                return 'check';
            }

            /* NORMAL */

            $('#turn').text(
                color === 'w'
                    ? "It's Whites Turn!"
                    : "It's Blacks Turn!"
            );

            return 'normal';
        },

        /* =====================================================
           CHECK HIGHLIGHT
           ===================================================== */

        highlightKingInCheck: function () {

            $('.gamecell')
                .removeClass(
                    'check-square'
                );

            let whiteKing =
                this.getKing('w');

            let blackKing =
                this.getKing('b');

            if (
                whiteKing &&
                this.isInCheck('w')
            ) {

                $('#' + whiteKing.position)
                    .addClass(
                        'check-square'
                    );
            }

            if (
                blackKing &&
                this.isInCheck('b')
            ) {

                $('#' + blackKing.position)
                    .addClass(
                        'check-square'
                    );
            }
        },

        /* =====================================================
           POSITION KEY
           Used for repetition detection
           ===================================================== */

        getPositionKey: function () {

            let board = [];

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.position !== null
                ) {

                    board.push(
                        piece.color +
                        piece.type +
                        '@' +
                        piece.position
                    );
                }
            }

            board.sort();

            let castling = '';

            let wk =
                main.variables.pieces.w_king;

            let bk =
                main.variables.pieces.b_king;

            let wr1 =
                main.variables.pieces.w_rook_1;

            let wr2 =
                main.variables.pieces.w_rook_2;

            let br1 =
                main.variables.pieces.b_rook_1;

            let br2 =
                main.variables.pieces.b_rook_2;

            if (
                wk &&
                !wk.moved
            ) {

                if (
                    wr2 &&
                    !wr2.moved &&
                    wr2.position === '8_1'
                ) {

                    castling += 'K';
                }

                if (
                    wr1 &&
                    !wr1.moved &&
                    wr1.position === '1_1'
                ) {

                    castling += 'Q';
                }
            }

            if (
                bk &&
                !bk.moved
            ) {

                if (
                    br2 &&
                    !br2.moved &&
                    br2.position === '8_8'
                ) {

                    castling += 'k';
                }

                if (
                    br1 &&
                    !br1.moved &&
                    br1.position === '1_8'
                ) {

                    castling += 'q';
                }
            }

            return (
                board.join('|') +
                '#' +
                main.variables.turn +
                '#' +
                castling
            );
        },

        /* =====================================================
           INSUFFICIENT MATERIAL
           ===================================================== */

        isInsufficientMaterial: function () {

            let pieces = [];

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.position !== null &&
                    piece.type !== 'king'
                ) {

                    pieces.push(piece);
                }
            }

            /* King vs King */

            if (
                pieces.length === 0
            ) {

                return true;
            }

            /* King + single bishop/knight vs King */

            if (
                pieces.length === 1 &&
                (
                    pieces[0].type === 'bishop' ||
                    pieces[0].type === 'knight'
                )
            ) {

                return true;
            }

            /*
             * King + bishop vs King + bishop
             * when bishops are on same color squares
             */

            if (
                pieces.length === 2 &&
                pieces[0].type === 'bishop' &&
                pieces[1].type === 'bishop'
            ) {

                let a =
                    this.coordinates(
                        pieces[0].position
                    );

                let b =
                    this.coordinates(
                        pieces[1].position
                    );

                let colorA =
                    (a.x + a.y) % 2;

                let colorB =
                    (b.x + b.y) % 2;

                if (
                    colorA === colorB
                ) {

                    return true;
                }
            }

            return false;
        },

        /* =====================================================
           SNAPSHOT FOR UNDO
           ===================================================== */

        createSnapshot: function () {

            let pieces = {};

            for (
                let name in main.variables.pieces
            ) {

                let p =
                    main.variables.pieces[name];

                pieces[name] = {

                    position:
                        p.position,

                    moved:
                        p.moved,

                    type:
                        p.type,

                    img:
                        p.img
                };
            }

            return {

                pieces:
                    pieces,

                turn:
                    main.variables.turn,

                lastMove:
                    main.variables.lastMove
                        ? {
                            ...main.variables.lastMove
                        }
                        : null,

                halfmoveClock:
                    main.variables.halfmoveClock,

                positionHistory:
                    {
                        ...main.variables.positionHistory
                    }
            };
        },

        /* =====================================================
           UNDO
           ===================================================== */

        undo: function () {

            if (
                main.variables.moveHistory.length === 0
            ) {
                return;
            }

            let snapshot =
                main.variables.moveHistory.pop();

            for (
                let name in snapshot.pieces
            ) {

                let saved =
                    snapshot.pieces[name];

                let piece =
                    main.variables.pieces[name];

                piece.position =
                    saved.position;

                piece.moved =
                    saved.moved;

                piece.type =
                    saved.type;

                piece.img =
                    saved.img;
            }

            main.variables.turn =
                snapshot.turn;

            main.variables.lastMove =
                snapshot.lastMove;

            main.variables.halfmoveClock =
                snapshot.halfmoveClock;

            main.variables.positionHistory =
                {
                    ...snapshot.positionHistory
                };

            main.variables.gameOver =
                false;

            this.renderBoard();

            this.clearSelection();

            this.checkGameState();
        },

        /* =====================================================
           RENDER BOARD
           ===================================================== */

        renderBoard: function () {

            $('.gamecell').empty();

            for (
                let name in main.variables.pieces
            ) {

                let piece =
                    main.variables.pieces[name];

                if (
                    piece.position !== null
                ) {

                    $('#' + piece.position).html(
                        '<span class="piece ' +
                        piece.color +
                        '" id="' +
                        piece.name +
                        '">' +
                        piece.img +
                        '</span>'
                    );
                }
            }
        },

        /* =====================================================
           RESET
           ===================================================== */

        resetGame: function () {

            this.gamesetup();
        },

        /* =====================================================
           EVENT HANDLERS
           ===================================================== */

        bindEvents: function () {

            let self = this;

            $('.gamecell')
                .off('click.chess')
                .on(
                    'click.chess',
                    function () {

                        if (
                            main.variables.gameOver
                        ) {
                            return;
                        }

                        let clickedPosition =
                            $(this).attr('id');

                        if (
                            !clickedPosition
                        ) {
                            return;
                        }

                        let clickedPiece =
                            self.getPieceAt(
                                clickedPosition
                            );

                        /* Move selected piece */

                        if (
                            main.variables.selectedpiece &&
                            main.variables.highlighted.includes(
                                clickedPosition
                            )
                        ) {

                            let selected =
                                main.variables.selectedpiece;

                            if (
                                self.move(
                                    selected,
                                    clickedPosition
                                )
                            ) {

                                self.endturn();
                            }

                            return;
                        }

                        /* Select own piece */

                        if (
                            clickedPiece &&
                            clickedPiece.color ===
                            main.variables.turn
                        ) {

                            self.selectPiece(
                                clickedPiece.name
                            );

                            return;
                        }

                        /* Clear selection */

                        self.clearSelection();
                    }
                );

            /* Reset button */

            $('#reset')
                .off('click.chess')
                .on(
                    'click.chess',
                    function () {

                        self.resetGame();
                    }
                );

            /* Undo button */

            $('#undo')
                .off('click.chess')
                .on(
                    'click.chess',
                    function () {

                        self.undo();
                    }
                );
        }
    }
};


/* =========================================================
   START GAME
   ========================================================= */

$(document).ready(function () {

    main.methods.gamesetup();

});