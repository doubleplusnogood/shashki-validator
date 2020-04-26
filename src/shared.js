export const Turns = {
    White: true,
    Black: false,
};

export const getOppositeTurn = (turn) => !turn;

export const PieceTypes = {
    Man: 0,
    King: 1,
};

export const isCoordInRange = (coord) => (coord >= 0) && (coord <= 7);
