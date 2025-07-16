let module = (function A(e) {
	let r,
		n,
		l,
		a,
		w,
		f,
		i,
		s,
		g,
		_,
		p,
		d = Uint8Array,
		C = Uint16Array,
		u = Uint32Array,
		D = Float64Array,
		c = DataView,
		Q = globalThis,
		B = typeof Q != p ? Q : typeof window != p ? window : {},
		E = 'push',
		h = 'length',
		P = 'slice',
		y = 'buffer',
		U = (Q) =>
			function (...b) {
				b = ((A, e) => {
					let t = Array(e);
					for (let r = 0; r < e; r++) t[r] = A[r];
					return t;
				})((b = b[P](0, Q.x)), Q.x);
				let F,
					W,
					k = Q.c,
					Y = Q.l,
					x = Y[h],
					M = ((A, e = 0) => {
						for (
							n = A[h],
								l = (3 * n + 1) >> 2,
								a = e ? (l % 1 ? -~l : l / e) * e : l,
								w = new d(a),
								f = 0,
								i = 0,
								s = 0;
							s < n;
							s++
						)
							if (
								((g = 3 & s),
								(f |=
									((r = A[s].charCodeAt(0)),
									((r > 64) & (r < 91)
										? r - 65
										: (r > 96) & (r < 123)
										? r - 71
										: (r > 47) & (r < 58)
										? r + 4
										: 43 == r
										? 62
										: 47 == r
										? 63
										: 0) <<
										(6 * (3 - g)))),
								3 == g || n - s == 1)
							) {
								for (_ = 0; _ < 3 && i < a; _++, i++)
									w[i] = (f >>> ((16 >>> _) & 24)) & 255;
								f = 0;
							}
						return w;
					})(e),
					R = !0,
					j = ((A) => {
						let e = 0;
						for (; 35 != A[e] || 74 != A[e + 1] || 13 != A[e + 2] || 91 != A[e + 3]; )
							e++;
						e += 4;
						let t = new C(A[y][P](e, e + 2))[0],
							r = new u(A[y][P](e + 2, e + 6))[0];
						e += 6;
						let n = new C(A[y][P](e, e + 6 * t)),
							o = {};
						for (let A = 0; A < n[h]; A += 3)
							o[(n[A + 2] << 16) | n[A + 1]] = String.fromCharCode(n[A]);
						e += 6 * t;
						let l = '',
							a = 0,
							w = 0,
							f = 0;
						for (let t of A[P](e))
							for (let A = 7; A >= 0 && f < r; A--) {
								(a = (a << 1) | ((t >> A) & 1)), w++, f++;
								let e = (a << 16) | w;
								o[e] && ((l += o[e]), (a = 0), (w = 0));
							}
                        console.log(l);
						return l.split('|~|');
					})(M),
					m = this,
					v = arguments,
					I = Q.e,
					J = 0 == Q.c;
				J && (W = {});
				let L = () => {
                    r = M[P](k + 1, k + 9); // reads an 8-byte double precision float immediate value from the bytecode
                    k += 8; // advance program counter past the value
                    n = new c(new d([...r])[y]);
                    const value = new D(n[y])[0]
                    console.log(`  == Read Immediate: ${value}`);
                    return value;
                },
                O = (A) => {
                    console.log(`  -> PUSHED:`, A);
                    Y[Y[h]] = A;
                },
                Z = () => {
                    let A = Y[Y[h] - 1];
                    Y.splice(Y[h] - 1, 1);
                    console.log(`  <- POPPED:`, A);
                    return A;
                };
				for (r of b) O(r);
				let S = [
					() => {
						O((B[Z``] = Z``));
					},
					() => {
						O(Z`` + Z``);
					},
					() => {
						O(Z`` >>> Z``);
					},
					() => {
						throw Z``;
					},
					() => {
						([o, t] = [Z``, Z``]), O(o && t);
					},
					function () {
						let A = L``,
							e = L``,
							t = L``,
							r = [];
						for (let A = 0; A < t; A++) {
							let A = Y.pop``,
								e = Y.pop``;
							r[E]([A, e]);
						}
						O(function (...t) {
							let r = [new Map(), new Map(), I[2] + 1];
							for (let [A, e] of I[1]) r[1].set(A, e);
							for (let [A, e] of I[0]) r[1].has(A) || r[1].set(A, [I[0], A]);
							return U({ c: A, x: e, l: [], e: r }).apply(this, t);
						});
					},
					() => {
						O(Z`` < Z``);
					},
					() => {
						let A = L``,
							e = Z``,
							t = [];
						for (let e = 0; e < A; e++) t[E](Z``);
						O(new e(...t));
					},
					() => {
						for (n = L``, r = 0; r < r; r++) Z``;
					},
					() => {
						O(Z`` in Z``);
					},
					() => {
						O(Z`` + 1);
					},
					() => {
						let A = L``;
						if (I[0].has(A)) {
							let e = I[0].get(A);
							O(e);
						} else if (I[1].has(A)) {
							let [e, t] = I[1].get(A),
								r = e.get(t);
							O(r);
						} else O(p);
					},
					() => {
						O(delete Z``[Z``]);
					},
					() => {
						O(Z`` - Z``);
					},
					() => {
						let A = L``,
							e = Z``,
							t = [];
						for (let e = 0; e < A; e++) t[E](Z``);
						O(e(...t));
					},
					() => {
						Y.v = !0;
						let A = Y[1];
						A && A.r ? (k = A.r - 1) : ((F = Y.vValue), (R = !1));
					},
					() => {
						O(Z`` / Z``);
					},
					() => {
						F = Z``;
					},
					() => {
						(r = L`` + 1), ([Y[Y[h] - 1], Y[Y[h] - r]] = [Y[Y[h] - r], Y[Y[h] - 1]]);
					},
					() => {
						let _0x0 = Z``;
						let _0x1 = Z``;
						let _0x2 = _0x0 ^ _0x1;
						console.log(_0x0, _0x1, _0x2);
						O(_0x2);
					},
					() => {
						let A = L``,
							e = L``,
							t = Z``;
						if (1 === e) I[0].set(A, t);
						else if (I[0].has(A)) I[0].set(A, t);
						else if (I[1].has(A)) {
							let e = I[1].get(A),
								[r, n] = e;
							r.set(n, t);
						} else I[0].set(A, t);
						O(t);
					},
					() => {
						let A = Z``;
						for (let e = A[h] - 1; e >= 0; e--) O(A[e]);
					},
					() => {
						O(L``);
					},
					() => {
						O(-Z``);
					},
					() => {
						O(Z`` <= Z``);
					},
					() => {
						let A = L`` - 1;
						!Z`` && (k = A);
					},
					() => {
						let A = L``,
							e = Z``,
							t = Z``,
							r = [];
						for (let e = 0; e < A; e++) r[E](Z``);
						O(e[t](...r));
					},
					() => {
						O(~Z``);
					},
					() => {
						let A = L``;
						Y[1] || (Y[1] = {}), (Y[1].u = A);
					},
					() => {
						if (Y.a) {
							let A = Y.a.i;
							throw ((Y.a = void 0), A);
						}
						if (Y.v) (F = Y.vValue), (R = !1);
						else if (Y.w) {
							const A = Y.wTarget;
							return (Y.w = !1), (Y.wTarget = void 0), void (k = A - 1);
						}
					},
					() => {
						O(Z`` | Z``);
					},
					() => {
						O(Z`` >> Z``);
					},
					() => {
						O(v);
					},
					() => {
						let A = L``,
							e = {};
						for (let t = 0; t < A; t++) {
							let A = Z``;
							e[Z``] = A;
						}
						O(e);
					},
					() => {
						let A = L``,
							e = [];
						for (let t = 0; t < A; t++) {
							let A = Z``;
							e[E](A);
						}
						O(e);
					},
					() => {
						O(Z`` * Z``);
					},
					() => {},
					() => {
						let A = L``,
							e = Y[1];
						e && e.r ? ((Y.w = !0), (Y.wTarget = A), (k = e.r - 1)) : (k = A - 1);
					},
					() => {},
					() => {
						Y.a = void 0;
					},
					() => {
						O(Z`` & Z``);
					},
					() => {
						Y.vValue = Z``;
					},
					() => {
						O((B[Z``][Z``] = Z``));
					},
					() => {
						O(Z`` ** Z``);
					},
					() => {
						O(null);
					},
					() => {
						O(Z``[Z``]);
					},
					() => {
						([o, t] = [Z``, Z``]), O(o || t);
					},
					() => {
						O(Y[Y[h] - 1]);
					},
					() => {
						O(Z`` > Z``);
					},
					() => {
						O(m);
					},
					() => {
						O(Z`` == Z``);
					},
					() => {
						[Y[Y[h] - 1], Y[Y[h] - 2]] = [Y[Y[h] - 2], Y[Y[h] - 1]];
					},
					() => {
						O(Z`` instanceof Z``);
					},
					() => {
						O(Z`` % Z``);
					},
					() => {
						O(Z`` - 1);
					},
					() => {
						([o, t] = [Z``, Z``]), O(o !== t);
					},
					() => {
						([o, t] = [Z``, Z``]), O(o ?? t);
					},
					() => {
						O(S);
					},
					() => {
						O(typeof Z``);
					},
					() => {
						O(Z`` >= Z``);
					},
					() => {
						(r = Y[h]), (n = r - x), (l = r - L``), L`` && (l -= n), O(Y[l]);
					},
					() => {
						O((Z``, !0));
					},
					() => {
						O(NaN);
					},
					() => {
						O(W);
					},
					() => {
						(R = !1), k--;
					},
					() => {
						O(Z`` << Z``);
					},
					() => {
						O(Z`` != Z``);
					},
					() => {
						O(!1);
					},
					() => {
						O((Z``[Z``] = Z``));
					},
					() => {
						O(void Z``);
					},
					() => {
						let A = L`` - 1;
						Z`` && (k = A);
					},
					() => {
						O(j[L``]);
					},
					() => {
						O(B[Z``]);
					},
					() => {
						O(RegExp(Z``, Z``));
					},
					() => {
						O(!0);
					},
					() => {
						O(+Z``);
					},
					() => {
						let A = L``;
						Y[1] || (Y[1] = {}), (Y[1].r = A);
					},
					() => {
						O(Y.a && Y.a.i);
					},
					() => {
						O(p);
					},
					() => {
						O(A);
					},
					() => {
						let A = Z``;
						O(A), O(A);
					},
					() => {
						([o, t] = [Z``, Z``]), O(o === t);
					},
					() => {
						O(!Z``);
					},
					() => {
						let A = L`` - 1;
						k = A;
					},
				];
				for (; k < M[h] && 1 == R; )
					try {
						S[M[k]](), k++;
					} catch (A) {
						Y.a = { i: A };
						let e = Y[1];
						if (!e || !e.u) throw A;
						k = e.u - 1;
					}
				return J ? W : F;
			},
		b = { c: 0, x: 0, l: [], e: [new Map(), new Map(), 0], g: null };
	return U(b).apply(B);
})(
	'UwAAAAAAACJABQAAAAAAgEVAAAAAAAAAAAAAAAAAAAAAAFMAAAAAAGCJQBYAAAAAAAAAACAtFAAAAAAAAPA/AAAAAAAA8D8IAAAAAAAA8D8LAAAAAAAA8D8UAAAAAAAACEAAAAAAAADwPwgAAAAAAADwPxYAAAAAAAAwQBQAAAAAAAAUQAAAAAAAAPA/CAAAAAAAAPA/FgAAAAAAIGFAFAAAAAAAABxAAAAAAAAA8D8IAAAAAAAA8D8WAAAAAAAAYkAWAAAAAABAbEAWAAAAAADAa0AWAAAAAADAb0AWAAAAAADAYEAWAAAAAADgb0AWAAAAAACAYkAWAAAAAACgbUAWAAAAAAAAaUAWAAAAAACAZ0AWAAAAAADAaUAWAAAAAABAb0AWAAAAAACgYEAWAAAAAAAgaEAWAAAAAABAYEAWAAAAAADgaUAiAAAAAAAAMEAUAAAAAAAAIkAAAAAAAADwPwgAAAAAAADwPwsAAAAAAAAUQEcAAAAAAAAAAAsAAAAAAAAIQC03CwAAAAAAAAhAUi4ZAAAAAACQekBDEUBTAAAAAACQekALAAAAAAAAHEAUAAAAAAAAJkAAAAAAAADwPwgAAAAAAADwPxYAAAAAAAAAABQAAAAAAAAoQAAAAAAAAPA/CAAAAAAAAPA/RwAAAAAAAAAACwAAAAAAAAhALQsAAAAAAAAoQAYZAAAAAABAiUALAAAAAAAAKEBHAAAAAAAA8D8LAAAAAAAACEAaAAAAAAAA8D8UAAAAAAAAKkAAAAAAAADwPwgAAAAAAADwPwsAAAAAAAAoQAsAAAAAAAAmQAsAAAAAAAAqQBMTFAAAAAAAACxAAAAAAAAA8D8IAAAAAAAA8D8LAAAAAAAAKEALAAAAAAAAIkAtCwAAAAAAACxANxkAAAAAAOCFQEMRQFMAAAAAAOCFQAsAAAAAAAAsQBQAAAAAAAAmQAAAAAAAAAAACAAAAAAAAPA/CwAAAAAAACZACAAAAAAAAPA/CwAAAAAAAChAUAoUAAAAAAAAKEAAAAAAAAAAAAgAAAAAAADwPwgAAAAAAADwP1MAAAAAAPB+QEoRQEAUAAAAAAAAAAAAAAAAAADwPwgAAAAAAADwPz8LAAAAAAAAAABHAAAAAAAAAEA/RAgAAAAAAADwP0AjSg1bEABnAAAAQQAEAAAAawAEAAEAZQADAAEAaAADAAIAYwADAAMAfAADAAQAdAAEAAoAfgAEAAsAbAAFABgAbgAFABkAZwAFABoAYQAFABsAcgAFABwAQwAFAB0AbwAFAB4AZAAFAB8Awc6pS41vnffIVLjRYg',
);

module.check('FLAG{xxxxxxxxxx}');
