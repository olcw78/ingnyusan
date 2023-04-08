import { RoutesT } from "@/routes";
import { RoutesConfigT } from "@/routes/RoutesConfig";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export class RoutesManager {
  public get routes(): RoutesT {
    return this._routes;
  }

  public constructor(
    private _routes: RoutesT,
    private readonly _routeConfig: RoutesConfigT
  ) {
    this.exclude(_routeConfig);
    this.reorderByNavOrder();
  }

  public reorderByNavOrder() {
    this._routes = this._routes.sort(
      ({ order: order1 }, { order: order2 }) => order1 - order2
    );
  }

  public reorderOverride(overrider: { name: string; order: number }[]) {}

  public exclude(config: RoutesConfigT) {
    for (let ex of config.exclude) {
      this._routes = this._routes.filter(x => x.name !== ex);
    }
  }

  public build(): ReactNode {
    return (
      <>
        {this._routes.map(({ path, name }) => (
          <li key={path}>
            <Link to={path}>
              <p className="text-slate-600">{name}</p>
            </Link>
          </li>
        ))}
      </>
    );
  }
}
