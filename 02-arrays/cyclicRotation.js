function solution(A, K) {
    const N = A.length;
    if (N === 0) return A;

    const rotations = K % N;
    if (rotations === 0) return A;

    return A.slice(-rotations).concat(A.slice(0, N - rotations));
}
