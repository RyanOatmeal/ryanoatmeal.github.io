{
  pkgs ? import <nixpkgs> { },
}:
pkgs.callPackage (
  {
    mkShell,
    nodejs,
    rustc,
    cargo,
    wasm-pack,
    lld,
  }:
  mkShell {
    strictDeps = true;
    nativeBuildInputs = [
      nodejs
      rustc
      cargo
      wasm-pack
      lld
    ];
  }
) { }
