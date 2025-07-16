let module = (function A(e) {
	let r,
		l,
		n,
		a,
		f,
		i,
		_,
		s,
		p,
		d,
		u,
		w = Uint8Array,
		c = Uint16Array,
		g = Uint32Array,
		B = Float64Array,
		y = DataView,
		h = globalThis,
		C = typeof h != u ? h : typeof window != u ? window : {},
		D = 'push',
		E = 'length',
		b = 'slice',
		U = 'buffer',
		j = (h) =>
			function (...v) {
				v = ((A, e) => {
					let t = Array(e);
					for (let r = 0; r < e; r++) t[r] = A[r];
					return t;
				})((v = v[b](0, h.f)), h.f);
				let G,
					I,
					M = h.g,
					O = h.a,
					P = O[E],
					R = ((A, e = 0) => {
						for (
							l = A[E],
								n = (3 * l + 1) >> 2,
								a = e ? (n % 1 ? -~n : n / e) * e : n,
								f = new w(a),
								i = 0,
								_ = 0,
								s = 0;
							s < l;
							s++
						)
							if (
								((p = 3 & s),
								(i |=
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
										(6 * (3 - p)))),
								3 == p || l - s == 1)
							) {
								for (d = 0; d < 3 && _ < a; d++, _++)
									f[_] = (i >>> ((16 >>> d) & 24)) & 255;
								i = 0;
							}
						return f;
					})(e),
					m = !0,
					x = ((A) => {
						let e = 0;
						for (; 35 != A[e] || 74 != A[e + 1] || 13 != A[e + 2] || 91 != A[e + 3]; )
							e++;
						e += 4;
						let t = new c(A[U][b](e, e + 2))[0],
							r = new g(A[U][b](e + 2, e + 6))[0];
						e += 6;
						let l = new c(A[U][b](e, e + 6 * t)),
							n = {};
						for (let A = 0; A < l[E]; A += 3)
							n[(l[A + 2] << 16) | l[A + 1]] = String.fromCharCode(l[A]);
						e += 6 * t;
						let o = '',
							a = 0,
							f = 0,
							i = 0;
						for (let t of A[b](e))
							for (let A = 7; A >= 0 && i < r; A--) {
								(a = (a << 1) | ((t >> A) & 1)), f++, i++;
								let e = (a << 16) | f;
								n[e] && ((o += n[e]), (a = 0), (f = 0));
							}
						return o.split('|~|');
					})(R),
					H = this,
					Q = arguments,
					T = h.j,
					F = 0 == h.g;
				F && (I = {});
				let J = () => (
						(r = R[b](M + 1, M + 9)),
						(M += 8),
						(l = new y(new w([...r])[U])),
						new B(l[U])[0]
					),
					S = (A) => {
						O[O[E]] = A;
					},
					V = () => {
						let A = O[O[E] - 1];
						return O.splice(O[E] - 1, 1), A;
					};
				for (r of v) S(r);
				let W = [
					() => {
						S((C[V``] = V``));
					},
					() => {
						S(V`` + V``);
					},
					() => {
						S(V`` >>> V``);
					},
					() => {
						throw V``;
					},
					() => {
						([o, t] = [V``, V``]), S(o && t);
					},
					function () {
						let A = J``,
							e = J``,
							t = J``,
							r = [];
						for (let A = 0; A < t; A++) {
							let A = O.pop``,
								e = O.pop``;
							r[D]([A, e]);
						}
						S(function (...t) {
							let r = [new Map(), new Map(), T[2] + 1];
							for (let [A, e] of T[1]) r[1].set(A, e);
							for (let [A, e] of T[0]) r[1].has(A) || r[1].set(A, [T[0], A]);
							return j({ g: A, f: e, a: [], j: r }).apply(this, t);
						});
					},
					() => {
						S(V`` < V``);
					},
					() => {
						let A = J``,
							e = V``,
							t = [];
						for (let e = 0; e < A; e++) t[D](V``);
						S(new e(...t));
					},
					() => {
						for (l = J``, r = 0; r < r; r++) V``;
					},
					() => {
						S(V`` in V``);
					},
					() => {
						S(V`` + 1);
					},
					() => {
						let A = J``;
						if (T[0].has(A)) {
							let e = T[0].get(A);
							S(e);
						} else if (T[1].has(A)) {
							let [e, t] = T[1].get(A),
								r = e.get(t);
							S(r);
						} else S(u);
					},
					() => {
						S(delete V``[V``]);
					},
					() => {
						S(V`` - V``);
					},
					() => {
						let A = J``,
							e = V``,
							t = [];
						for (let e = 0; e < A; e++) t[D](V``);
						S(e(...t));
					},
					() => {
						O.c = !0;
						let A = O[1];
						A && A.b ? (M = A.b - 1) : ((G = O.cValue), (m = !1));
					},
					() => {
						S(V`` / V``);
					},
					() => {
						G = V``;
					},
					() => {
						(r = J`` + 1), ([O[O[E] - 1], O[O[E] - r]] = [O[O[E] - r], O[O[E] - 1]]);
					},
					() => {
						S(V`` ^ V``);
					},
					() => {
						let A = J``,
							e = J``,
							t = V``;
						if (1 === e) T[0].set(A, t);
						else if (T[0].has(A)) T[0].set(A, t);
						else if (T[1].has(A)) {
							let e = T[1].get(A),
								[r, l] = e;
							r.set(l, t);
						} else T[0].set(A, t);
						S(t);
					},
					() => {
						let A = V``;
						for (let e = A[E] - 1; e >= 0; e--) S(A[e]);
					},
					() => {
						S(J``);
					},
					() => {
						S(-V``);
					},
					() => {
						S(V`` <= V``);
					},
					() => {
						let A = J`` - 1;
						!V`` && (M = A);
					},
					() => {
						let A = J``,
							e = V``,
							t = V``,
							r = [];
						for (let e = 0; e < A; e++) r[D](V``);
						S(e[t](...r));
					},
					() => {
						S(~V``);
					},
					() => {
						let A = J``;
						O[1] || (O[1] = {}), (O[1].r = A);
					},
					() => {
						if (O.y) {
							let A = O.y.d;
							throw ((O.y = void 0), A);
						}
						if (O.c) (G = O.cValue), (m = !1);
						else if (O.x) {
							const A = O.xTarget;
							return (O.x = !1), (O.xTarget = void 0), void (M = A - 1);
						}
					},
					() => {
						S(V`` | V``);
					},
					() => {
						S(V`` >> V``);
					},
					() => {
						S(Q);
					},
					() => {
						let A = J``,
							e = {};
						for (let t = 0; t < A; t++) {
							let A = V``;
							e[V``] = A;
						}
						S(e);
					},
					() => {
						let A = J``,
							e = [];
						for (let t = 0; t < A; t++) {
							let A = V``;
							e[D](A);
						}
						S(e);
					},
					() => {
						S(V`` * V``);
					},
					() => {},
					() => {
						let A = J``,
							e = O[1];
						e && e.b ? ((O.x = !0), (O.xTarget = A), (M = e.b - 1)) : (M = A - 1);
					},
					() => {},
					() => {
						O.y = void 0;
					},
					() => {
						S(V`` & V``);
					},
					() => {
						O.cValue = V``;
					},
					() => {
						S((C[V``][V``] = V``));
					},
					() => {
						S(V`` ** V``);
					},
					() => {
						S(null);
					},
					() => {
						S(V``[V``]);
					},
					() => {
						([o, t] = [V``, V``]), S(o || t);
					},
					() => {
						S(O[O[E] - 1]);
					},
					() => {
						S(V`` > V``);
					},
					() => {
						S(H);
					},
					() => {
						S(V`` == V``);
					},
					() => {
						[O[O[E] - 1], O[O[E] - 2]] = [O[O[E] - 2], O[O[E] - 1]];
					},
					() => {
						S(V`` instanceof V``);
					},
					() => {
						S(V`` % V``);
					},
					() => {
						S(V`` - 1);
					},
					() => {
						([o, t] = [V``, V``]), S(o !== t);
					},
					() => {
						([o, t] = [V``, V``]), S(o ?? t);
					},
					() => {
						S(W);
					},
					() => {
						S(typeof V``);
					},
					() => {
						S(V`` >= V``);
					},
					() => {
						(r = O[E]), (l = r - P), (n = r - J``), J`` && (n -= l), S(O[n]);
					},
					() => {
						S((V``, !0));
					},
					() => {
						S(NaN);
					},
					() => {
						S(I);
					},
					() => {
						(m = !1), M--;
					},
					() => {
						S(V`` << V``);
					},
					() => {
						S(V`` != V``);
					},
					() => {
						S(!1);
					},
					() => {
						S((V``[V``] = V``));
					},
					() => {
						S(void V``);
					},
					() => {
						let A = J`` - 1;
						V`` && (M = A);
					},
					() => {
						S(x[J``]);
					},
					() => {
						S(C[V``]);
					},
					() => {
						S(RegExp(V``, V``));
					},
					() => {
						S(!0);
					},
					() => {
						S(+V``);
					},
					() => {
						let A = J``;
						O[1] || (O[1] = {}), (O[1].b = A);
					},
					() => {
						S(O.y && O.y.d);
					},
					() => {
						S(u);
					},
					() => {
						S(A);
					},
					() => {
						let A = V``;
						S(A), S(A);
					},
					() => {
						([o, t] = [V``, V``]), S(o === t);
					},
					() => {
						S(!V``);
					},
					() => {
						let A = J`` - 1;
						M = A;
					},
				];
				for (; M < R[E] && 1 == m; )
					try {
						W[R[M]](), M++;
					} catch (A) {
						O.y = { d: A };
						let e = O[1];
						if (!e || !e.r) throw A;
						M = e.r - 1;
					}
				return F ? I : G;
			},
		v = { g: 0, f: 0, a: [], j: [new Map(), new Map(), 0], u: null };
	return j(v).apply(C);
})(
	'RwAAAAAAAAAAFAAAAAAAAAAAAAAAAAAA8D8IAAAAAAAA8D8WAAAAAAAAAAAWAAAAAAAAAABTAAAAAAAAT0AFAAAAAAAAWEAAAAAAAAAAAAAAAAAAAPA/UwAAAAAAIGZAFgAAAAAAAAAAIC0UAAAAAAAA8D8AAAAAAADwPwgAAAAAAADwPwsAAAAAAAAAAAsAAAAAAADwPzIZAAAAAACgZUBKEUBTAAAAAACgZUBDEUBAFAAAAAAAAPA/AAAAAAAA8D8IAAAAAAAA8D8/CwAAAAAAAPA/RwAAAAAAAPA/P0QIAAAAAAAA8D9AI0oNWxIAXwAAADAABQAaADMABQAbAHsABAAAAHYABAABAC0ABAACAG4ABAADAH0ABAAEAH4ABAAFAGgABAAGAGsABAAHAGUAAwAEAGwABAAKAHwABAALAGMABAAMAEYABQAcAEwABQAdAEEABQAeAEcABQAfAOd98K2MotHEtbxpjg',
);

module.check('FLAG{}');