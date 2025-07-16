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
					() => { // 0 SET_GLOBAL_MEMBER
						console.log('[SET_GLOBAL_MEMBER] d['+x[x[u]-2]+'] =', x[x[u]-1]);
						j((d[S()] = S()));
					},
					() => { // 1 ADD
						console.log('[ADD]', x[x[u]-2], '+', x[x[u]-1]);
						j(S() + S());
					},
					() => { // 2 USHR (>>>)
						console.log('[USHR]', x[x[u]-2], '>>>', x[x[u]-1]);
						j(S() >>> S());
					},
					() => { // 3 THROW
						console.log('[THROW]', x[x[u]-1]);
						throw S();
					},
					() => { // 4 AND (&&)
						console.log('[AND]', x[x[u]-2], '&&', x[x[u]-1]);
						([o, t] = [S(), S()]), j(o && t);
					},
					function () { // 5 CREATE_FUNC
						console.log('[CREATE_FUNC]');
						let A = N(), e = N(), t = N(), r = [];
						for (let A = 0; A < t; A++) {
							let A = x.pop(), e = x.pop();
							r[c]([A, e]);
						}
						j(function (...t) {
							let r = [new Map(), new Map(), H[2] + 1];
							for (let [A, e] of H[1]) r[1].set(A, e);
							for (let [A, e] of H[0]) r[1].has(A) || r[1].set(A, [H[0], A]);
							return y({ o: A, l: e, z: [], m: r }).apply(this, t);
						});
					},
					() => { // 6 LT (<)
						console.log('[LT]', x[x[u]-2], '<', x[x[u]-1]);
						j(S() < S());
					},
					() => { // 7 NEW
						let A = N();
						console.log(`[NEW] constructor:`, x[x[u]-1-A], `args count:`, A);
						let e = S(), t = [];
						for (let i = 0; i < A; i++) t[c](S());
						j(new e(...t));
					},
					() => { // 8 POP_MULTI
						w = N();
						console.log(`[POP_MULTI] count:`, w);
						for (r = 0; r < w; r++) S();
					},
					() => { // 9 IN
						console.log('[IN]', x[x[u]-2], 'in', x[x[u]-1]);
						j(S() in S());
					},
					() => { // 10 INC (++)
						console.log('[INC]', x[x[u]-1], '+ 1');
						j(S() + 1);
					},
					() => { // 11 GET_CLOSURE_VAR
						let A = N();
						console.log(`[GET_CLOSURE_VAR] id: ${A}`);
						if (H[0].has(A)) {
							let e = H[0].get(A);
							j(e);
						} else if (H[1].has(A)) {
							let [e, t] = H[1].get(A), r = e.get(t);
							j(r);
						} else j(i);
					},
					() => { // 12 DELETE_PROP
						console.log('[DELETE_PROP] delete', x[x[u]-2], '['+x[x[u]-1]+']');
						j(delete S()[S()]);
					},
					() => { // 13 SUB
						console.log('[SUB]', x[x[u]-2], '-', x[x[u]-1]);
						j(S() - S());
					},
					() => { // 14 CALL
						let A = N();
						console.log(`[CALL] func:`, x[x[u]-1], `args count:`, A);
						let e = S(), t = [];
						for (let i = 0; i < A; i++) t[c](S());
						j(e(...t));
					},
					() => { // 15 RETURN
						console.log('[RETURN]');
						x.q = !0;
						let A = x[1];
						A && A.y ? (R = A.y - 1) : ((L = x.qValue), (k = !1));
					},
					() => { // 16 DIV
						console.log('[DIV]', x[x[u]-2], '/', x[x[u]-1]);
						j(S() / S());
					},
					() => { // 17 SET_RETVAL
						console.log('[SET_RETVAL]', x[x[u]-1]);
						L = S();
					},
					() => { // 18 SWAP
						r = N() + 1;
						console.log(`[SWAP] top with stack[top-${r-1}]`);
						([x[x[u] - 1], x[x[u] - r]] = [x[x[u] - r], x[x[u] - 1]]);
					},
					() => { // 19 XOR (^)
						console.log('[XOR]', x[x[u]-2], '^', x[x[u]-1]);
						j(S() ^ S());
					},
					() => { // 20 SET_CLOSURE_VAR
						let A = N(), e = N(), t = S();
						console.log(`[SET_CLOSURE_VAR] id: ${A}, scope: ${e}, value:`, t);
						if (1 === e) H[0].set(A, t);
						else if (H[0].has(A)) H[0].set(A, t);
						else if (H[1].has(A)) {
							let e = H[1].get(A), [r, w] = e;
							r.set(w, t);
						} else H[0].set(A, t);
						j(t);
					},
					() => { // 21 PUSH_ALL
						let A = S();
						console.log('[PUSH_ALL] from array:', A);
						for (let e = A[u] - 1; e >= 0; e--) j(A[e]);
					},
					() => { // 22 PUSH_CONST (Number)
						let val = N();
						console.log('[PUSH_CONST]', val);
						j(val);
					},
					() => { // 23 NEG (-)
						console.log('[NEG] -' + x[x[u]-1]);
						j(-S());
					},
					() => { // 24 LTE (<=)
						console.log('[LTE]', x[x[u]-2], '<=', x[x[u]-1]);
						j(S() <= S());
					},
					() => { // 25 BRANCH_IF_FALSE
						let A = N() - 1;
						console.log(`[BRANCH_IF_FALSE] cond:`, x[x[u]-1], `target: ${A}`);
						!S() && (R = A);
					},
					() => { // 26 CALL_PROP
						let A = N();
						console.log(`[CALL_PROP] obj:`, x[x[u]-2-A], `prop:`, x[x[u]-1-A], `args count:`, A);
						let e = S(), t = S(), r = [];
						for (let i = 0; i < A; i++) r[c](S());
						j(e[t](...r));
					},
					() => { // 27 BIT_NOT (~)
						console.log('[BIT_NOT] ~' + x[x[u]-1]);
						j(~S());
					},
					() => { // 28 SET_CATCH_TARGET
						let A = N();
						console.log(`[SET_CATCH_TARGET] target: ${A}`);
						x[1] || (x[1] = {}), (x[1].v = A);
					},
					() => { // 29 END_TRY
						console.log('[END_TRY]');
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
					() => { // 30 BIT_OR (|)
						console.log('[BIT_OR]', x[x[u]-2], '|', x[x[u]-1]);
						j(S() | S());
					},
					() => { // 31 SHR (>>)
						console.log('[SHR]', x[x[u]-2], '>>', x[x[u]-1]);
						j(S() >> S());
					},
					() => { // 32 PUSH_ARGS_OBJ
						console.log('[PUSH_ARGS_OBJ]');
						j(b);
					},
					() => { // 33 CREATE_OBJ
						let A = N();
						console.log(`[CREATE_OBJ] with ${A} properties from stack`);
						let e = {};
						for (let t = 0; t < A; t++) { let A = S(); e[S()] = A; }
						j(e);
					},
					() => { // 34 CREATE_ARRAY
						let A = N();
						console.log(`[CREATE_ARRAY] with ${A} items from stack`);
						let e = [];
						for (let t = 0; t < A; t++) { let A = S(); e[c](A); }
						j(e);
					},
					() => { // 35 MUL (*)
						console.log('[MUL]', x[x[u]-2], '*', x[x[u]-1]);
						j(S() * S());
					},
					() => { /* 36 NOOP */ },
					() => { // 37 JUMP_FINALLY
						let A = N();
						console.log(`[JUMP_FINALLY] target: ${A}`);
						let e = x[1];
						e && e.y ? ((x.h = !0), (x.hTarget = A), (R = e.y - 1)) : (R = A - 1);
					},
					() => { /* 38 NOOP */ },
					() => { // 39 CLEAR_EXCEPTION
						console.log('[CLEAR_EXCEPTION]');
						x.g = void 0;
					},
					() => { // 40 BIT_AND (&)
						console.log('[BIT_AND]', x[x[u]-2], '&', x[x[u]-1]);
						j(S() & S());
					},
					() => { // 41 SET_Q_VAL
						console.log('[SET_Q_VAL]', x[x[u]-1]);
						x.qValue = S();
					},
					() => { // 42 SET_GLOBAL_MEMBER_PROP
						console.log('[SET_GLOBAL_MEMBER_PROP] d['+x[x[u]-3]+']['+x[x[u]-2]+'] =', x[x[u]-1]);
						j((d[S()][S()] = S()));
					},
					() => { // 43 POW (**)
						console.log('[POW]', x[x[u]-2], '**', x[x[u]-1]);
						j(S() ** S());
					},
					() => { // 44 PUSH_NULL
						console.log('[PUSH_NULL]');
						j(null);
					},
					() => { // 45 GET_PROP
						console.log('[GET_PROP]', x[x[u]-2], '['+x[x[u]-1]+']');
						j(S()[S()]);
					},
					() => { // 46 OR (||)
						console.log('[OR]', x[x[u]-2], '||', x[x[u]-1]);
						([o, t] = [S(), S()]), j(o || t);
					},
					() => { // 47 DUP
						console.log('[DUP]', x[x[u]-1]);
						j(x[x[u] - 1]);
					},
					() => { // 48 GT (>)
						console.log('[GT]', x[x[u]-2], '>', x[x[u]-1]);
						j(S() > S());
					},
					() => { // 49 PUSH_THIS
						console.log('[PUSH_THIS]');
						j(Y);
					},
					() => { // 50 EQ (==)
						console.log('[EQ]', x[x[u]-2], '==', x[x[u]-1]);
						j(S() == S());
					},
					() => { // 51 SWAP_TOP_TWO
						console.log('[SWAP_TOP_TWO]');
						[x[x[u] - 1], x[x[u] - 2]] = [x[x[u] - 2], x[x[u] - 1]];
					},
					() => { // 52 INSTANCEOF
						console.log('[INSTANCEOF]', x[x[u]-2], 'instanceof', x[x[u]-1]);
						j(S() instanceof S());
					},
					() => { // 53 MOD (%)
						console.log('[MOD]', x[x[u]-2], '%', x[x[u]-1]);
						j(S() % S());
					},
					() => { // 54 DEC (--)
						console.log('[DEC]', x[x[u]-1], '- 1');
						j(S() - 1);
					},
					() => { // 55 NE_STRICT (!==)
						console.log('[NE_STRICT]', x[x[u]-2], '!==', x[x[u]-1]);
						([o, t] = [S(), S()]), j(o !== t);
					},
					() => { // 56 NULLISH_COALESCE (??)
						console.log('[NULLISH]', x[x[u]-2], '??', x[x[u]-1]);
						([o, t] = [S(), S()]), j(o ?? t);
					},
					() => { // 57 PUSH_OPCODE_ARRAY
						console.log('[PUSH_OPCODE_ARRAY]');
						j(Z);
					},
					() => { // 58 TYPEOF
						console.log('[TYPEOF] typeof', x[x[u]-1]);
						j(typeof S());
					},
					() => { // 59 GTE (>=)
						console.log('[GTE]', x[x[u]-2], '>=', x[x[u]-1]);
						j(S() >= S());
					},
					() => { // 60 GET_LOCAL_VAR
						let offset = N();
						let doffset = N();
						(r = x[u]), (w = r - I), (l = r - offset), doffset && (l -= w);
						console.log(`[GET_LOCAL_VAR] offset=${offset}, index=${l}`);
						j(x[l]);
					},
					() => { // 61 TO_BOOL_TRUE
						console.log('[TO_BOOL_TRUE]', x[x[u]-1]);
						j((S(), !0));
					},
					() => { // 62 PUSH_NAN
						console.log('[PUSH_NAN]');
						j(NaN);
					},
					() => { // 63 PUSH_MODULE_SCOPE
						console.log('[PUSH_MODULE_SCOPE]');
						j(U);
					},
					() => { // 64 EXIT
						console.log('[EXIT]');
						(k = !1), R--;
					},
					() => { // 65 SHL (<<)
						console.log('[SHL]', x[x[u]-2], '<<', x[x[u]-1]);
						j(S() << S());
					},
					() => { // 66 NE (!=)
						console.log('[NE]', x[x[u]-2], '!=', x[x[u]-1]);
						j(S() != S());
					},
					() => { // 67 PUSH_FALSE
						console.log('[PUSH_FALSE]');
						j(!1);
					},
					() => { // 68 SET_PROP
						console.log('[SET_PROP]', x[x[u]-3], '['+x[x[u]-2]+'] =', x[x[u]-1]);
						j((S()[S()] = S()));
					},
					() => { // 69 VOID
						console.log('[VOID] void', x[x[u]-1]);
						j(void S());
					},
					() => { // 70 BRANCH_IF_TRUE
						let A = N() - 1;
						console.log(`[BRANCH_IF_TRUE] cond:`, x[x[u]-1], `target: ${A}`);
						S() && (R = A);
					},
					() => { // 71 PUSH_CONST (String)
						let val = N();
						console.log('[PUSH_CONST]', `"${J[val]}"`);
						j(J[val]);
					},
					() => { // 72 GET_GLOBAL
						console.log('[GET_GLOBAL] d['+x[x[u]-1]+']');
						j(d[S()]);
					},
					() => { // 73 NEW_REGEXP
						console.log('[NEW_REGEXP] /'+x[x[u]-2]+'/'+x[x[u]-1]);
						j(RegExp(S(), S()));
					},
					() => { // 74 PUSH_TRUE
						console.log('[PUSH_TRUE]');
						j(!0);
					},
					() => { // 75 UNARY_PLUS (+)
						console.log('[UNARY_PLUS] +' + x[x[u]-1]);
						j(+S());
					},
					() => { // 76 SET_FINALLY_TARGET
						let A = N();
						console.log(`[SET_FINALLY_TARGET] target: ${A}`);
						x[1] || (x[1] = {}), (x[1].y = A);
					},
					() => { // 77 GET_EXCEPTION
						console.log('[GET_EXCEPTION]');
						j(x.g && x.g.x);
					},
					() => { // 78 PUSH_UNDEFINED
						console.log('[PUSH_UNDEFINED]');
						j(i);
					},
					() => { // 79 PUSH_MODULE_FUNC
						console.log('[PUSH_MODULE_FUNC]');
						j(A);
					},
					() => { // 80 DUP_POP
						let val = S();
						console.log('[DUP_POP]', val);
						j(val), j(val);
					},
					() => { // 81 EQ_STRICT (===)
						console.log('[EQ_STRICT]', x[x[u]-2], '===', x[x[u]-1]);
						([o, t] = [S(), S()]), j(o === t);
					},
					() => { // 82 NOT (!)
						console.log('[NOT] !' + x[x[u]-1]);
						j(!S());
					},
					() => { // 83 JUMP
						let A = N() - 1;
						console.log(`[JUMP] target: ${A}`);
						R = A;
					},
				];
				for (; R < G[u] && 1 == k; )
					try {
						Z[G[R]](), R++;
					} catch (A) {
						console.error(`[VM_EXCEPTION] at R=${R-1}:`, A);
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

module.check('FLAG{xxxxxxxxxxxxxx}');