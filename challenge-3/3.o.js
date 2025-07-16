let module = (function A(e) {
	let r,
		w,
		l,
		n,
		g,
		C,
		Q,
		D,
		F,
		a,
		i,
		s = Uint8Array,
		f = Uint16Array,
		P = Uint32Array,
		B = Float64Array,
		_ = DataView,
		p = globalThis,
		d = typeof p != i ? p : typeof window != i ? window : {},
		c = 'push',
		u = 'length',
		E = 'slice',
		h = 'buffer',
		y = (p) =>
			function (...M) {
				M = ((A, e) => {
					let t = Array(e);
					for (let r = 0; r < e; r++) t[r] = A[r];
					return t;
				})((M = M[E](0, p.l)), p.l);
				let L,
					U,
					R = p.o,
					x = p.z,
					I = x[u],
					G = ((A, e = 0) => {
						for (
							w = A[u],
								l = (3 * w + 1) >> 2,
								n = e ? (l % 1 ? -~l : l / e) * e : l,
								g = new s(n),
								C = 0,
								Q = 0,
								D = 0;
							D < w;
							D++
						)
							if (
								((F = 3 & D),
								(C |=
									((r = A[D].charCodeAt(0)),
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
										(6 * (3 - F)))),
								3 == F || w - D == 1)
							) {
								for (a = 0; a < 3 && Q < n; a++, Q++)
									g[Q] = (C >>> ((16 >>> a) & 24)) & 255;
								C = 0;
							}
						return g;
					})(e),
					k = !0,
					J = ((A) => {
						let e = 0;
						for (; 35 != A[e] || 74 != A[e + 1] || 13 != A[e + 2] || 91 != A[e + 3]; )
							e++;
						e += 4;
						let t = new f(A[h][E](e, e + 2))[0],
							r = new P(A[h][E](e + 2, e + 6))[0];
						e += 6;
						let w = new f(A[h][E](e, e + 6 * t)),
							o = {};
						for (let A = 0; A < w[u]; A += 3)
							o[(w[A + 2] << 16) | w[A + 1]] = String.fromCharCode(w[A]);
						e += 6 * t;
						let l = '',
							n = 0,
							g = 0,
							C = 0;
						for (let t of A[E](e))
							for (let A = 7; A >= 0 && C < r; A--) {
								(n = (n << 1) | ((t >> A) & 1)), g++, C++;
								let e = (n << 16) | g;
								o[e] && ((l += o[e]), (n = 0), (g = 0));
							}
						return l.split('|~|');
					})(G),
					Y = this,
					b = arguments,
					H = p.m,
					O = 0 == p.o;
				O && (U = {});
				let N = () => (
						(r = G[E](R + 1, R + 9)),
						(R += 8),
						(w = new _(new s([...r])[h])),
						new B(w[h])[0]
					),
					j = (A) => {
						x[x[u]] = A;
					},
					S = () => {
						let A = x[x[u] - 1];
						return x.splice(x[u] - 1, 1), A;
					};
				for (r of M) j(r);
				let Z = [
					() => {
						j((d[S``] = S``));
					},
					() => {
						j(S`` + S``);
					},
					() => {
						j(S`` >>> S``);
					},
					() => {
						throw S``;
					},
					() => {
						([o, t] = [S``, S``]), j(o && t);
					},
					function () {
						let A = N``,
							e = N``,
							t = N``,
							r = [];
						for (let A = 0; A < t; A++) {
							let A = x.pop``,
								e = x.pop``;
							r[c]([A, e]);
						}
						j(function (...t) {
							let r = [new Map(), new Map(), H[2] + 1];
							for (let [A, e] of H[1]) r[1].set(A, e);
							for (let [A, e] of H[0]) r[1].has(A) || r[1].set(A, [H[0], A]);
							return y({ o: A, l: e, z: [], m: r }).apply(this, t);
						});
					},
					() => {
						j(S`` < S``);
					},
					() => {
						let A = N``,
							e = S``,
							t = [];
						for (let e = 0; e < A; e++) t[c](S``);
						j(new e(...t));
					},
					() => {
						for (w = N``, r = 0; r < r; r++) S``;
					},
					() => {
						j(S`` in S``);
					},
					() => {
						j(S`` + 1);
					},
					() => {
						let A = N``;
						if (H[0].has(A)) {
							let e = H[0].get(A);
							j(e);
						} else if (H[1].has(A)) {
							let [e, t] = H[1].get(A),
								r = e.get(t);
							j(r);
						} else j(i);
					},
					() => {
						j(delete S``[S``]);
					},
					() => {
						j(S`` - S``);
					},
					() => {
						let A = N``,
							e = S``,
							t = [];
						for (let e = 0; e < A; e++) t[c](S``);
						j(e(...t));
					},
					() => {
						x.q = !0;
						let A = x[1];
						A && A.y ? (R = A.y - 1) : ((L = x.qValue), (k = !1));
					},
					() => {
						j(S`` / S``);
					},
					() => {
						L = S``;
					},
					() => {
						(r = N`` + 1), ([x[x[u] - 1], x[x[u] - r]] = [x[x[u] - r], x[x[u] - 1]]);
					},
					() => {
						j(S`` ^ S``);
					},
					() => {
						let A = N``,
							e = N``,
							t = S``;
						if (1 === e) H[0].set(A, t);
						else if (H[0].has(A)) H[0].set(A, t);
						else if (H[1].has(A)) {
							let e = H[1].get(A),
								[r, w] = e;
							r.set(w, t);
						} else H[0].set(A, t);
						j(t);
					},
					() => {
						let A = S``;
						for (let e = A[u] - 1; e >= 0; e--) j(A[e]);
					},
					() => {
						j(N``);
					},
					() => {
						j(-S``);
					},
					() => {
						j(S`` <= S``);
					},
					() => {
						let A = N`` - 1;
						!S`` && (R = A);
					},
					() => {
						let A = N``,
							e = S``,
							t = S``,
							r = [];
						for (let e = 0; e < A; e++) r[c](S``);
						j(e[t](...r));
					},
					() => {
						j(~S``);
					},
					() => {
						let A = N``;
						x[1] || (x[1] = {}), (x[1].v = A);
					},
					() => {
						if (x.g) {
							let A = x.g.x;
							throw ((x.g = void 0), A);
						}
						if (x.q) (L = x.qValue), (k = !1);
						else if (x.h) {
							const A = x.hTarget;
							return (x.h = !1), (x.hTarget = void 0), void (R = A - 1);
						}
					},
					() => {
						j(S`` | S``);
					},
					() => {
						j(S`` >> S``);
					},
					() => {
						j(b);
					},
					() => {
						let A = N``,
							e = {};
						for (let t = 0; t < A; t++) {
							let A = S``;
							e[S``] = A;
						}
						j(e);
					},
					() => {
						let A = N``,
							e = [];
						for (let t = 0; t < A; t++) {
							let A = S``;
							e[c](A);
						}
						j(e);
					},
					() => {
						j(S`` * S``);
					},
					() => {},
					() => {
						let A = N``,
							e = x[1];
						e && e.y ? ((x.h = !0), (x.hTarget = A), (R = e.y - 1)) : (R = A - 1);
					},
					() => {},
					() => {
						x.g = void 0;
					},
					() => {
						j(S`` & S``);
					},
					() => {
						x.qValue = S``;
					},
					() => {
						j((d[S``][S``] = S``));
					},
					() => {
						j(S`` ** S``);
					},
					() => {
						j(null);
					},
					() => {
						j(S``[S``]);
					},
					() => {
						([o, t] = [S``, S``]), j(o || t);
					},
					() => {
						j(x[x[u] - 1]);
					},
					() => {
						j(S`` > S``);
					},
					() => {
						j(Y);
					},
					() => {
						j(S`` == S``);
					},
					() => {
						[x[x[u] - 1], x[x[u] - 2]] = [x[x[u] - 2], x[x[u] - 1]];
					},
					() => {
						j(S`` instanceof S``);
					},
					() => {
						j(S`` % S``);
					},
					() => {
						j(S`` - 1);
					},
					() => {
						([o, t] = [S``, S``]), j(o !== t);
					},
					() => {
						([o, t] = [S``, S``]), j(o ?? t);
					},
					() => {
						j(Z);
					},
					() => {
						j(typeof S``);
					},
					() => {
						j(S`` >= S``);
					},
					() => {
						(r = x[u]), (w = r - I), (l = r - N``), N`` && (l -= w), j(x[l]);
					},
					() => {
						j((S``, !0));
					},
					() => {
						j(NaN);
					},
					() => {
						j(U);
					},
					() => {
						(k = !1), R--;
					},
					() => {
						j(S`` << S``);
					},
					() => {
						j(S`` != S``);
					},
					() => {
						j(!1);
					},
					() => {
						j((S``[S``] = S``));
					},
					() => {
						j(void S``);
					},
					() => {
						let A = N`` - 1;
						S`` && (R = A);
					},
					() => {
						j(J[N``]);
					},
					() => {
						j(d[S``]);
					},
					() => {
						j(RegExp(S``, S``));
					},
					() => {
						j(!0);
					},
					() => {
						j(+S``);
					},
					() => {
						let A = N``;
						x[1] || (x[1] = {}), (x[1].y = A);
					},
					() => {
						j(x.g && x.g.x);
					},
					() => {
						j(i);
					},
					() => {
						j(A);
					},
					() => {
						let A = S``;
						j(A), j(A);
					},
					() => {
						([o, t] = [S``, S``]), j(o === t);
					},
					() => {
						j(!S``);
					},
					() => {
						let A = N`` - 1;
						R = A;
					},
				];
				for (; R < G[u] && 1 == k; )
					try {
						Z[G[R]](), R++;
					} catch (A) {
						x.g = { x: A };
						let e = x[1];
						if (!e || !e.v) throw A;
						R = e.v - 1;
					}
				return O ? U : L;
			},
		M = { o: 0, l: 0, z: [], m: [new Map(), new Map(), 0], i: null };
	return y(M).apply(d);
})(
	'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',
);

module.check('FLAG{}');