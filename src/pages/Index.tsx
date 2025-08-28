import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  BarChart3,
  Calendar,
  MessageSquare
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Visão Geral
          </h1>
          <p className="text-muted-foreground">
            Acompanhe o desempenho da sua empresa em tempo real
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Receita Total"
            value="R$ 45.231"
            change="+20.1% em relação ao mês passado"
            changeType="positive"
            icon={DollarSign}
          />
          <DashboardCard
            title="Usuários Ativos"
            value="2.350"
            change="+180 usuários esta semana"
            changeType="positive"
            icon={Users}
          />
          <DashboardCard
            title="Taxa de Conversão"
            value="12.5%"
            change="+4.75% desde a semana passada"
            changeType="positive"
            icon={TrendingUp}
          />
          <DashboardCard
            title="Desempenho"
            value="94.2%"
            change="+2.02% desde ontem"
            changeType="positive"
            icon={Activity}
          />
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-dashboard-surface border-dashboard-border shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Vendas Mensais
              </CardTitle>
              <CardDescription>
                Evolução das vendas nos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground border-2 border-dashed border-dashboard-border rounded-lg">
                Gráfico de vendas (área para integração com biblioteca de gráficos)
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dashboard-surface border-dashboard-border shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Atividades Recentes
              </CardTitle>
              <CardDescription>
                Últimas ações realizadas no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-dashboard-hover">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Novo usuário cadastrado</p>
                    <p className="text-xs text-muted-foreground">Maria Santos se registrou na plataforma</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2min</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-dashboard-hover">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Venda concluída</p>
                    <p className="text-xs text-muted-foreground">Pedido #1234 foi finalizado com sucesso</p>
                  </div>
                  <span className="text-xs text-muted-foreground">5min</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-dashboard-hover">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Relatório gerado</p>
                    <p className="text-xs text-muted-foreground">Relatório mensal está disponível para download</p>
                  </div>
                  <span className="text-xs text-muted-foreground">1h</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-dashboard-surface border-dashboard-border shadow-soft">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesse rapidamente as funcionalidades mais utilizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 hover:bg-dashboard-hover">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="font-medium">Agendar Reunião</span>
                <span className="text-xs text-muted-foreground">Organize sua agenda</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 hover:bg-dashboard-hover">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span className="font-medium">Enviar Mensagem</span>
                <span className="text-xs text-muted-foreground">Comunique-se com a equipe</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 hover:bg-dashboard-hover">
                <ArrowUpRight className="h-6 w-6 text-primary" />
                <span className="font-medium">Ver Relatórios</span>
                <span className="text-xs text-muted-foreground">Análise detalhada</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
